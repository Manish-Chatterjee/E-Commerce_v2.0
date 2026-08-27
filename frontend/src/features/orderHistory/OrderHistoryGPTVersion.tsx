// import { useEffect, useState } from "react";
// import type { Order } from "./types/OrderTypes";

// const OrderHistoryGPTVersion = () => {
//   const [orders, setOrders] = useState<Order[]>([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await fetch("http://localhost:8080/api/orders", {
//           credentials: "include",
//         });

//         if (!response.ok) {
//           throw new Error("Failed to fetch orders");
//         }

//         const data = await response.json();

//         setOrders(data);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h1>Order History</h1>

//       {orders.length === 0 ? (
//         <p>No orders yet.</p>
//       ) : (
//         orders.map((order) => (
//           <div key={order.id}>
//             <h3>Order #{order.orderNumber}</h3>

//             <p>Status: {order.status}</p>

//             <p>Total: ₹{order.totalAmount}</p>

//             <p>Ordered on: {new Date(order.createdAt).toLocaleString()}</p>

//             {order.items.map((item) => (
//               <div key={item.id}>
//                 <p>{item.product.productName}</p>

//                 <p>Color: {item.variant.color}</p>

//                 <p>Size: {item.variant.size}</p>

//                 <p>Quantity: {item.quantity}</p>

//                 <p>Price: ₹{item.price}</p>
//               </div>
//             ))}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default OrderHistoryGPTVersion;


// not using
