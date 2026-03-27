export const formatPrice = (price: number | undefined) => {
  return `₹${price?.toLocaleString()}`
}