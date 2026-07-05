import styled from "styled-components";

type Props = {
  id?: number;
  productImages?: string[];
};

const ProductImages = ({ productImages }: Props) => {
  return (
    <Container>
      <MainImg>
        {productImages?.map((item) => (
          <Img src={item} alt="img" width={"100%"} height={"100%"} />
        ))}
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

  @media (max-width: 840px) {
    width: 80%;
  }
`;

const MainImg = styled.div`
  width: 100%;
  height: 100%;

  margin: auto;
`;

const Img = styled.img`
  object-fit: contain;
`;
