package com.example.ecom.cart.controller;

import com.example.ecom.cart.entity.Cart;
import com.example.ecom.cart.service.CartService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/cart")
public class CartController {

	private final CartService cartService;

	public CartController(CartService cartService) {
		this.cartService = cartService;
	}

	@GetMapping
	public Cart getCart() {
		return cartService.getCart();
	}

	@PostMapping("/items")
	public Cart addToCart(@RequestParam String variantId, @RequestParam Integer quantity) {

		return cartService.addToCart(variantId, quantity);
	}

	@PatchMapping("/items/{variantId}")
	public Cart updateQuantity(@PathVariable String variantId, @RequestParam Integer quantity) {

		return cartService.updateQuantity(variantId, quantity);
	}

	@DeleteMapping("/items/{variantId}")
	public Cart removeFromCart(@PathVariable String variantId) {

		return cartService.removeFromCart(variantId);
	}

	@DeleteMapping
	public void clearCart() {
		cartService.clearCart();
	}
}