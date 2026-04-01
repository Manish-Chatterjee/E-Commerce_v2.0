export const calculateDiscount = (price: number, discount: number): number => {
  // return `${price - price * (discount / 100)} (${discount}%)`;
  return (discount / 100) * price;
};
