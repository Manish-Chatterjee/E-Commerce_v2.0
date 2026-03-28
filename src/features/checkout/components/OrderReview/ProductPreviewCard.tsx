// import { useState } from "react";
import CarousalCard from "../ui/CarousalCard";
import styled from "styled-components";

// type Product = {
//   id: number;
//   title: string;
//   description: string;
//   img: string;
// };

// type Props = {
//   id: number;
//   productName: string;
//   price: number;
//   quantity: number;
// };

type CartItem = {
  id: number;
  productName: string;
  price: number;
  quantity: number;
  img: string; // add this if you want image
};

type Prop = {
  selectedData: CartItem[];
};

// type Props = {
//   selectedData: CartItem[];
// };

// const data: Product[] = [
//   {
//     id: 1,
//     title: "Nike Air Max",
//     description: "Comfortable running shoe",
//     img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/t/d/3/-original-imahgbrrxy2nemrb.jpeg?q=90",
//   },
//   {
//     id: 2,
//     title: "Nike Zoom",
//     description: "Lightweight trainer",
//     img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/t/d/3/-original-imahgbrrxy2nemrb.jpeg?q=90",
//   },
//   {
//     id: 3,
//     title: "Nike Pro",
//     description: "Premium sports shoe",
//     img: "https://rukminim2.flixcart.com/image/480/640/xif0q/shoe/t/d/3/-original-imahgbrrxy2nemrb.jpeg?q=90",
//   },
// ];

// const ProductPreviewCard = ({ selectedData }: Props) => {
//   const [activeIndex, setActiveIndex] = useState(0);

// console.log(selectedData,"selectedData")

//   return (
//     <Container>
//       {selectedData.map((item) => (
//         <>
//           <CarousalCard data={data} onChange={setActiveIndex} />

//           {/* ✅ Dynamic Product Info */}
//           <Info>
//             {/* <h2>{data[activeIndex].title}</h2> */}
//             <h2>{item.productName}</h2>
//             {/* <p>{data[activeIndex].description}</p> */}
//             <p>description</p>

//             <div>
//               <div>Size: XL</div>
//               <div>Color: Red</div>
//               <div>{item.price}</div>
//             </div>

//             <Hr />

//             <div>
//               <div>Subtotal</div>
//               <div>Discount</div>
//               <div>Shipping</div>
//             </div>

//             <Hr />

//             <div>Total</div>
//           </Info>
//         </>
//       ))}
//     </Container>
//   );
// };

// const ProductPreviewCard = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const storedData: CartItem[] = JSON.parse(
//     localStorage.getItem("cart") || "[]",
//   );

//   // const selectedData: CartItem[] = storedData
//   //   ? JSON.parse(storedData)
//   //   : [];

//   console.log(storedData, "storedData");
//   // console.log("data")

//   return (
//     <Container>
//       {/* {selectedData.map((item) => ( */}
//       {storedData?.map((item) => (
//         <div key={item.id}>
//           {/* ✅ Pass correct data */}
//           <CarousalCard
//             data={[{ id: item.id, img: item.img }]} // adapt to your carousel structure
//             onChange={setActiveIndex}
//           />

//           <Info>
//             <h2>{item.productName}</h2>
//             <p>description</p>

//             <div>
//               <div>Size: XL</div>
//               <div>Color: Red</div>
//               <div>₹{item.price}</div>
//             </div>

//             <Hr />

//             <div>
//               <div>Subtotal: ₹{item.price * item.quantity}</div>
//               <div>Discount: ₹0</div>
//               <div>Shipping: Free</div>
//             </div>

//             <Hr />

//             <div>Total: ₹{item.price * item.quantity}</div>
//           </Info>
//         </div>
//       ))}
//     </Container>
//   );
// };

const ProductPreviewCard = ({ selectedData }: Prop) => {
  // const storedData: CartItem[] = JSON.parse(
  //   localStorage.getItem("cart") || "[]",
  // );

  const storedData = selectedData;

  return (
    <Container>
      {storedData.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <CarousalCard data={storedData} />
      )}
    </Container>
  );
};

export default ProductPreviewCard;

const Container = styled.div`
  border: none;
  width: fit-content;
  margin: 40px auto;
`;
