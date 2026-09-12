import styled from "styled-components";

type Props = {
  id?: number;
  // productImages?: string[];
  productImage?: string;
};

const ProductImages = ({ productImage }: Props) => {
  return (
    <Container>
      <MainImg>
        {/* {productImages?.map((item) => (  // to add multiple images of the product as an array in the backend.
        ))} */}
        <Img src={productImage} alt="img" width={"100%"} height={"100%"} />
      </MainImg>
    </Container>
  );
};

export default ProductImages;

const Container = styled.div`
  width: 50%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  height: 400px;

  /* border: 2px dashed green; */

  @media (max-width: 840px) {
    width: 80%;
  }
`;

const MainImg = styled.div`
  width: 100%;
  height: 100%;

  margin: auto;

  display: flex;
  align-items: center;
`;

const Img = styled.img`
  object-fit: contain;
  max-width: 500px;
  /* border: 2px solid slateblue; */
  margin: auto;
`;
