import styled from "styled-components";

const ProductItem = () => {
  return (
    <Container>
      <ProductContainer>
        <Img
          src="https://cdn.media.amplience.net/i/frasersdev/sdfr-ua-gender-1-640x640?fmt=auto&upscale=false&w=993&h=993&sm=c&$h-ttl$"
          alt="img1"
        />
        <Details>
          <DetailsText>Under Armour</DetailsText>
          <DetailsText>Rp 5999.00</DetailsText>
          <DetailsText>XL</DetailsText>
        </Details>
      </ProductContainer>
    </Container>
  );
};

export default ProductItem;

const Container = styled.div``;

const Details = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-left: 20px;
`;

const Img = styled.img`
  /* width: 100px; */
  height: 100%;
  border-radius: 14px 0 0 14px;
`;

const ProductContainer = styled.div`
  height: 150px;
  display: flex;
  border: 1px solid gray;
  border-radius: 15px;
`;

const DetailsText = styled.p`
    font-weight: 600;
`