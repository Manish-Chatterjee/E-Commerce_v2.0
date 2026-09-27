import type { Order } from "@/features/orderHistory/types/OrderTypes";
import type { Product } from "@/features/ProductDetails/types/ProductInfoTypes";
import type { CartItem } from "@/shared/context/Cart_Context/CartTypes";

const CART_KEY = "cart";
const ORDERS_KEY = "orders";

const getStoredCart = async (): Promise<CartItem[]> => {
  const cart = localStorage.getItem(CART_KEY);

  if (!cart) {
    return [];
  }

  return JSON.parse(cart) as CartItem[];
};

const saveCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const getCartItem = async (): Promise<CartItem[]> => {
  return getStoredCart();
};

export const addToCart = async (variantId: string): Promise<CartItem[]> => {
  const cart = await getStoredCart();

  // Find existing item with the same variant
  const existingItem = cart.find(
    (item) => item.variant.variantId === variantId,
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    const response = await fetch("/data/products.json");

    if (!response.ok) {
      throw new Error("Failed to load products");
    }

    const products: Product[] = await response.json();

    // Find the product containing this variant
    const product = products.find((product) =>
      product.variants?.some((variant) => variant.variantId === variantId),
    );

    if (!product) {
      throw new Error("Product not found");
    }

    const variant = product.variants?.find(
      (variant) => variant.variantId === variantId,
    );

    if (!variant) {
      throw new Error("Variant not found");
    }

    const newCartItem: CartItem = {
      id: Date.now(),
      product,
      variant,
      quantity: 1,
    };

    cart.push(newCartItem);
  }

  saveCart(cart);

  return cart;
};

export const removeFromCart = async (
  variantId: string,
): Promise<CartItem[]> => {
  const cart = await getStoredCart();

  const updatedCart = cart.filter(
    (item) => item.variant.variantId !== variantId,
  );

  saveCart(updatedCart);

  return updatedCart;
};

export const updateQuantity = async (
  variantId: string,
  quantity: number,
): Promise<CartItem[]> => {
  const cart = await getStoredCart();

  const item = cart.find((item) => item.variant.variantId === variantId);

  if (item) {
    item.quantity = quantity;
  }

  saveCart(cart);

  return cart;
};

export const clearCart = async (): Promise<CartItem[]> => {
  localStorage.removeItem(CART_KEY);
  return [];
};

export const placeOrder = async (): Promise<Order> => {
  const cart = await getStoredCart();

  if (cart.length === 0) {
    throw new Error("Cart is empty");
  }

  const now = new Date().toISOString();

  const order: Order = {
    id: Date.now(),
    orderNumber: `ORD-${Date.now()}`,
    totalAmount: cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ),
    status: "CONFIRMED",
    createdAt: now,
    updatedAt: now,
    items: cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      price: item.product.price,
      product: item.product,
      variant: item.variant,
      image:
        item.variant.images?.[0]?.imageUrl || item.product.productImage || "",
    })),
  };

  // Get existing orders
  const existingOrders: Order[] = JSON.parse(
    localStorage.getItem(ORDERS_KEY) || "[]",
  );

  // Add new order
  existingOrders.push(order);

  // Save orders
  localStorage.setItem(ORDERS_KEY, JSON.stringify(existingOrders));

  localStorage.removeItem(CART_KEY);

  return order;
};
