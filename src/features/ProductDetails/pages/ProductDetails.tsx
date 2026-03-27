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
  const ID = Number(id);
  const productData = Products.find((item) => item.id === ID);

  return (
    <>
      <SecondNavbar logo={productData?.productBrandLogo} />
      <Container>
        <ProductImages
          id={productData?.id}
          productImages={productData?.productImages}
        />
        <ProductInfo
          id={productData?.id}
          productBrandLogo={productData?.productBrandLogo}
          productBrand={productData?.productBrand}
          productName={productData?.productName}
          price={productData?.price}
        />
      </Container>
    </>
  );
};

export default ProductDetails;

const Container = styled.div`
  display: flex;
`;
