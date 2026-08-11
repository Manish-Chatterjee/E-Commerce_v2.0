package com.example.ecom.products.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecom.products.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	boolean existsByProductId(String productId);

}
