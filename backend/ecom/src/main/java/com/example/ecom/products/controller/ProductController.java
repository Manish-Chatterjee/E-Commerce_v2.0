package com.example.ecom.products.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.ecom.products.entity.Product;
import com.example.ecom.products.service.ProductService;

@CrossOrigin(origins = "http://localhost:5173") // for cors limitation in fe
@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@GetMapping("/id/{id}")
	public Product getItemById(@PathVariable long id) {
		return productService.getItemById(id);
	}

	@GetMapping("/allProducts")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@PostMapping("/save")
	public void saveItem(@RequestBody Product product) {
		productService.saveItem(product);
	}

	@PatchMapping("/{id}/wishlist")
	public Product updateWishlist(@PathVariable Long id, @RequestBody Map<String, Boolean> request) {
		return productService.updateWishlist(id, request.get("wishlist"));
	}
	
	@PatchMapping("/{id}/stockAvailability")
	public Product updateStockAvailability(@PathVariable Long id, @RequestBody Map<String, Boolean> request) {
		return productService.updateStockAvailability(id, request.get("stockAvailability"));
	}

	// Needed proper api structure for backend related to every feature present in frontend

}
