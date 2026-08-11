// the type determines what structure of data should be received from api.

export type Product = {
  id: number;
  productBrand: string;
  productBrandLogo: string;
  productID: string;
  productName: string;
  price: number;
  // colors: string[];
  // sizes: number[];
  // productImages: ProductImage[];
  // productImages: string[];
  productImage: string;
  stockAvailability: boolean;
  wishlist: boolean;
};