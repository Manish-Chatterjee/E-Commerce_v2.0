package com.example.ecom.products.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecom.products.entity.ProductVariant;

public interface ProductVariantRepository extends JpaRepository<ProductVariant, Long> {

	Optional<ProductVariant> findByVariantId(String variantId);

	boolean existsByVariantId(String variantId);
}
