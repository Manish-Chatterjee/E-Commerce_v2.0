package com.example.ecom.DAL;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ecom.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
	
	boolean existsByProductId(String productId);

}
