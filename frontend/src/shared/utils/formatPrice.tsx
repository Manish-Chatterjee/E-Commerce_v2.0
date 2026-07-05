export const formatPrice = (price: number | undefined) => {
  return `₹${price?.toLocaleString()}`
}


// 👉🏻 Clear the upper formatPrice and use the new format with different currency values

// import { useCurrency } from "./CurrencyContext";

// const exchangeRates = {
//   USD: 1,
//   INR: 83,
//   EUR: 0.92,
// };

// const formatPrice = (price: number, currency: string) => {
//   const converted = price * exchangeRates[currency];

//   return new Intl.NumberFormat("en-IN", {
//     style: "currency",
//     currency,
//   }).format(converted);
// };

// const ProductCard = ({ price }) => {
//   const { currency } = useCurrency();

//   return <p>{formatPrice(price, currency)}</p>;
// };