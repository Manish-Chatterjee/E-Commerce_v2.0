import type { CartItem } from "../../../../shared/context/Cart_Context/CartTypes";
import CarousalCard from "../ui/CarousalCard";
import styled from "styled-components";

// type CartItem = {
//   id: number;
//   productName: string;
//   price: number;
//   quantity: number;
//   img: string; // add this if you want image
// };

type Prop = {
  selectedData: CartItem[];
};

const ProductPreviewCard = ({ selectedData }: Prop) => {
  const storedData = selectedData;
  console.log(storedData, "storedData");

  return (
    <Container>
      {storedData.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <CarousalCard data={storedData} />
        </>
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
