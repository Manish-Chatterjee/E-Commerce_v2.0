package com.example.ecom.products.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String productBrand;
	@Column
	private String productBrandLogo;
	@Column
	private String productId;
	@Column
	private String productName;
	@Column
	private float price;
	@Column
	private Boolean stockAvailability;
	@Column
	private String productImage;
	@Column(nullable = false)
	private boolean wishlist = false;

//	boolean → defaults to false, cannot be null.
//	Boolean → can be true, false, or null.

	public Long getId() {
		return id;
	}

	public String getProductBrand() {
		return productBrand;
	}

	public void setProductBrand(String productBrand) {
		this.productBrand = productBrand;
	}

	public String getProductBrandLogo() {
		return productBrandLogo;
	}

	public void setProductBrandLogo(String productBrandLogo) {
		this.productBrandLogo = productBrandLogo;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String string) {
		this.productId = string;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public Boolean getStockAvailability() {
		return stockAvailability;
	}

	public void setStockAvailability(Boolean stockAvailability) {
		this.stockAvailability = stockAvailability;
	}

	public String getProductImage() {
		return productImage;
	}

	public void setProductImage(String productImage) {
		this.productImage = productImage;
	}

	public Boolean getWishlist() {
		return wishlist;
	}

	public void setWishlist(Boolean wishlist) {
		this.wishlist = wishlist;
	}

	public Product() {
	}

	public Product(String productBrand, String productBrandLogo, String productName, float price,
			Boolean stockAvailability, String productImage, Boolean wishlist) {
		this.productBrand = productBrand;
		this.productBrandLogo = productBrandLogo;
		this.productName = productName;
		this.price = price;
		this.stockAvailability = stockAvailability;
		this.productImage = productImage;
		this.wishlist = wishlist;
	}

}
