export type ButtonProps = {
  image: string;
  selected: boolean;
};

export type ProductSize = {
  size: number;
  available: boolean;
  stock?: number;
  sku?: string;
};

export type VariantImage = {
  id?: number;
  imageUrl: string;
};

export type ProductVariant = {
  id?: number;
  variantId: string;
  color: string;
  size: string;
  availability: boolean;
  images: VariantImage[];
};

export type Product = {
  id: number;
  productBrand?: string;
  productBrandLogo?: string;
  productId?: string;
  productName?: string;
  price: number;
  stockAvailability?: boolean;
  productImage?: string;
  wishlist: boolean;

  variants: ProductVariant[];
  setSelectedImage: React.Dispatch<React.SetStateAction<string | undefined>>;
};
