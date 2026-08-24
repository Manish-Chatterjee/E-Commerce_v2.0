import styled from "styled-components";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import SecondNavbar from "../../../shared/components/section/SecondNavbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//remove the default logo value when data is passed properly, pass img src
const ProductDetails = () => {
  const { id, productId } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          // `http://localhost:8080/api/products/id/${id}`,
          `http://localhost:8080/api/products/${productId}`,
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
  }, [productId]);

  console.log(product,'product')

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
          variants={product?.variants}
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
