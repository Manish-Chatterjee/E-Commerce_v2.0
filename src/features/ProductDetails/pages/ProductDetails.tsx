// import Container from '@mui/material/Container'
import styled from "styled-components";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import SecondNavbar from "../../../shared/components/section/SecondNavbar";
import { useParams } from "react-router-dom";
import Products from "../../../shared/sampleData/shopPage.json";

//remove the default logo value when data is passed properly, pass img src
const ProductDetails = () => {
  const { id } = useParams();
  const productId = Number(id);
  const productData = Products.find((item) => item.id === productId);

  return (
    <>
      <SecondNavbar logo={productData?.productBrandLogo} />
      <Container>
        <ProductImages productId={productId}/>
        <ProductInfo productId={productId}/>
      </Container>
    </>
  );
};

export default ProductDetails;

const Container = styled.div`
  display: flex;
`;
