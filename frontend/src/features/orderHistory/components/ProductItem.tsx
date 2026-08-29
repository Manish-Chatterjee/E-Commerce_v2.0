import type { VariantImage } from "@/features/ProductDetails/types/ProductInfoTypes";
import { formatPrice } from "@/shared/utils/formatPrice";
import styled from "styled-components";

type ProductItemProps = {
  ProductName?: string;
  Color?: string;
  Size?: string;
  Quantity?: number;
  Price?: number;
  Image?: VariantImage[];
};

const ProductItem = ({
  ProductName,
  Color,
  Size,
  Quantity,
  Price,
  Image,
}: ProductItemProps) => {
  return (
    <Container>
      <ProductContainer>
        <ImgContainer>
        <Img src={Image?.[0]?.imageUrl} alt="img1" />
        </ImgContainer>
        <Details>
          <DetailsText>
            Product: {ProductName} ({Color})
          </DetailsText>
          <DetailsText>Price: {formatPrice(Price)}</DetailsText>
          <DetailsText>Size: {Size}</DetailsText>
          <DetailsText>Quantity: {Quantity}</DetailsText>
        </Details>
      </ProductContainer>
    </Container>
  );
};

export default ProductItem;

const Container = styled.div``;

const Details = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: space-evenly; */
  display: grid;
  grid-template-columns: repeat(2, 300px);
  align-items: center;
  margin-left: 50px;
`;

const ImgContainer = styled.div`
  width: 200px;
  height: 100%;
  overflow: hidden;
  border-radius: 14px 0 0 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: -1;
`

const Img = styled.img`
  width: 100%;
  height: fit-content;
  object-fit: cover;
  display: block;
`;

const ProductContainer = styled.div`
  height: 150px;
  display: flex;
  /* border-bottom: 1px solid gray; */
  border-radius: 15px;

  box-shadow: 0 10px 12px -8px gray;
`;

const DetailsText = styled.p`
  font-weight: 600;
`;
