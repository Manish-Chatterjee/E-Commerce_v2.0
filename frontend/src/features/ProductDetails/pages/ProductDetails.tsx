import styled from "styled-components";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import SecondNavbar from "../../../shared/components/section/SecondNavbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import Products from "../../../shared/sampleData/shopPage.json";

//remove the default logo value when data is passed properly, pass img src
const ProductDetails = () => {
  const { id } = useParams();
  const ID = Number(id);
  // const productData = Products.find((item) => item.id === ID);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/products/id/${id}`,
        );

        if (!response.ok) {
          throw new Error("Product not found");
        }

        const data = await response.json();

        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SecondNavbar logo={product?.productBrandLogo} />
      <Container>
        <ProductImages
          id={product?.id}
          productImage={product?.productImage}
        />
        <ProductInfo
          id={product?.id}
          productBrandLogo={product?.productBrandLogo}
          productBrand={product?.productBrand}
          productName={product?.productName}
          price={product?.price}
          wishlist={product?.wishlist}
        />
      </Container>
    </>
  );
};

export default ProductDetails;

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 840px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
