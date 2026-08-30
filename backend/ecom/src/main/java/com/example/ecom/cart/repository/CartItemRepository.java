package com.example.ecom.cart.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecom.cart.entity.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

	Optional<CartItem> findByCartIdAndVariantId(Long cartId, Long variantId);
	
	void deleteByCartId(Long cartId);
}
