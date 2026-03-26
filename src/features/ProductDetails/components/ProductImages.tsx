import styled from "styled-components";
import Products from "../../../shared/sampleData/shopPage.json";

type Props = {
  productId: number;
};

const ProductImages = ({ productId }: Props) => {

  const productData = Products.find((item) => item.id === productId);

  return (
    <Container>
      <MainImg>
        {productData?.productImages.map((item) => (
        <Img
          src={item}
          alt="img"
        />))}
      </MainImg>
      {/* <SubImg>
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
        <Img
          src="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
          alt="img"
        />
      </SubImg> */}
    </Container>
  );
};

export default ProductImages;

const Container = styled.div`
  border: 2px dashed black;
  /* flex: 1; */
  width: 50%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* width: fit-content; */
`;

const MainImg = styled.div`
  border: 2px solid red;
  /* flex: 3; */
  width: fit-content;
  aspect-ratio: 1/1;
  margin: auto;
`;

const SubImg = styled.div`
  border: 2px dashed red;
  /* flex: 1; */
  height: 150px;
  overflow: scroll;
  flex-wrap: nowrap;
  width: fit-content;
`;

const Img = styled.img`
  height: 100%;
`;
