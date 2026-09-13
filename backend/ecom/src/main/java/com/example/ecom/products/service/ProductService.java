package com.example.ecom.products.service;

import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ecom.products.repository.ProductRepository;
import com.example.ecom.products.entity.Product;
import com.example.ecom.products.entity.ProductVariant;
import com.example.ecom.products.entity.VariantImage;

@Service
public class ProductService {

	@Autowired
	private ProductRepository productRepository;

//	To generate random id for product_id
	private String generateUniqueProductId() {
		String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		StringBuilder id = new StringBuilder();
		Random random = new Random();

		for (int i = 0; i < 6; i++) {
			id.append(characters.charAt(random.nextInt(characters.length())));
		}

		return id.toString();
	}

//	Generate unique variantId
	private String generateUniqueVariantId() {
		String id;

		do {
			id = generateUniqueProductId();
		} while (productRepository.existsByProductId(id));

		return id;
	}

//	APIs
	public Product getItemById(long id) {
		return productRepository.findById(id).get();
	}

	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

//	public void saveItem(Product product) {
//		product.setProductId(generateUniqueProductId());
//		productRepository.save(product);
//	}
	
	public Product saveItem(Product product) {

	    product.setProductId(generateUniqueProductId());

	    for (ProductVariant variant : product.getVariants()) {

	        variant.setVariantId(generateUniqueVariantId());
	        variant.setProduct(product);

	        for (VariantImage image : variant.getImages()) {
	            image.setVariant(variant);
	        }
	    }

	    return productRepository.save(product);
	}

	public Product updateWishlist(Long id, Boolean wishlist) {

		Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));

		product.setWishlist(wishlist);

		return productRepository.save(product);
	}

	public Product updateStockAvailability(Long id, Boolean stockAvailability) {

		Product product = productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));

		product.setStockAvailability(stockAvailability);

		return productRepository.save(product);
	}

	public Product getItemByProductId(String productId) {
		return productRepository.findByProductId(productId)
				.orElseThrow(() -> new RuntimeException("Product not found"));
	}

}
