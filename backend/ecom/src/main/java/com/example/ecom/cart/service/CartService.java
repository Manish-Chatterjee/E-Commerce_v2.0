package com.example.ecom.cart.service;

import com.example.ecom.cart.entity.Cart;
import com.example.ecom.cart.entity.CartItem;
import com.example.ecom.cart.repository.CartItemRepository;
import com.example.ecom.cart.repository.CartRepository;
import com.example.ecom.products.entity.ProductVariant;
import com.example.ecom.products.repository.ProductVariantRepository;

import jakarta.transaction.Transactional;

import com.example.ecom.auth.entity.User;
import com.example.ecom.auth.repository.UserRepository;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class CartService {

    private final CartRepository cartRepository;
    private final CartItemRepository cartItemRepository;
    private final ProductVariantRepository productVariantRepository;
    private final UserRepository userRepository;

    public CartService(
            CartRepository cartRepository,
            CartItemRepository cartItemRepository,
            ProductVariantRepository productVariantRepository,
            UserRepository userRepository) {

        this.cartRepository = cartRepository;
        this.cartItemRepository = cartItemRepository;
        this.productVariantRepository = productVariantRepository;
        this.userRepository = userRepository;
    }

    // GET CART
    public Cart getCart() {

        User user = getCurrentUser();

        return cartRepository.findByUserId(user.getId())
                .orElseGet(() -> createCart(user));
    }

    // ADD TO CART
    public Cart addToCart(String variantId, Integer quantity) {

        User user = getCurrentUser();

        Cart cart = cartRepository.findByUserId(user.getId())
                .orElseGet(() -> createCart(user));

        ProductVariant variant = productVariantRepository
                .findByVariantId(variantId)
                .orElseThrow(() ->
                        new RuntimeException("Variant not found"));

        CartItem existingItem = cartItemRepository
                .findByCartIdAndVariantId(cart.getId(), variant.getId())
                .orElse(null);

        if (existingItem != null) {

            existingItem.setQuantity(
                    existingItem.getQuantity() + quantity
            );

            cartItemRepository.save(existingItem);

        } else {

            CartItem cartItem = new CartItem();

            cartItem.setCart(cart);
            cartItem.setProduct(variant.getProduct());
            cartItem.setVariant(variant);
            cartItem.setQuantity(quantity);

            cartItemRepository.save(cartItem);
        }

        return cartRepository.findById(cart.getId()).orElse(cart);
    }

    // UPDATE QUANTITY
    public Cart updateQuantity(String variantId, Integer quantity) {

        User user = getCurrentUser();

        Cart cart = cartRepository.findByUserId(user.getId())
                .orElseThrow(() ->
                        new RuntimeException("Cart not found"));

        ProductVariant variant = productVariantRepository
                .findByVariantId(variantId)
                .orElseThrow(() ->
                        new RuntimeException("Variant not found"));

        CartItem cartItem = cartItemRepository
                .findByCartIdAndVariantId(cart.getId(), variant.getId())
                .orElseThrow(() ->
                        new RuntimeException("Cart item not found"));

        cartItem.setQuantity(quantity);

        cartItemRepository.save(cartItem);

        return cart;
    }

    // REMOVE ITEM
    public Cart removeFromCart(String variantId) {

        User user = getCurrentUser();

        Cart cart = cartRepository.findByUserId(user.getId())
                .orElseThrow(() ->
                        new RuntimeException("Cart not found"));

        ProductVariant variant = productVariantRepository
                .findByVariantId(variantId)
                .orElseThrow(() ->
                        new RuntimeException("Variant not found"));

        CartItem cartItem = cartItemRepository
                .findByCartIdAndVariantId(cart.getId(), variant.getId())
                .orElseThrow(() ->
                        new RuntimeException("Cart item not found"));

        cartItemRepository.delete(cartItem);

        return cart;
    }

    // CLEAR CART
    @Transactional       // Because Spring Data JPA already provides transactions for many repository methods, but your service method is performing a delete operation through a repository method in a way that requires an active transaction.
    public void clearCart() {

        User user = getCurrentUser();

        Cart cart = cartRepository.findByUserId(user.getId())
                .orElseThrow(() ->
                        new RuntimeException("Cart not found"));

//        cartItemRepository.deleteAll(cart.getItems());
        cartItemRepository.deleteByCartId(cart.getId());
    }

    // CREATE CART
    private Cart createCart(User user) {

        Cart cart = new Cart();

        cart.setUser(user);

        return cartRepository.save(cart);
    }

    // GET LOGGED-IN USER
    private User getCurrentUser() {

        Authentication authentication =
                SecurityContextHolder
                        .getContext()
                        .getAuthentication();

        String username = authentication.getName();

        return userRepository.findByUsername(username)
                .orElseThrow(() ->
                        new RuntimeException("User not found"));
    }
}