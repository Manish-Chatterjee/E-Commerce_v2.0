import styled from "styled-components";
import ProductImages from "../components/ProductImages";
import ProductInfo from "../components/ProductInfo";
import SecondNavbar from "../../../shared/components/section/SecondNavbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "@/features/loading/Loading";
import type { Product } from "../types/ProductInfoTypes";
import { useDataMode } from "@/shared/context/DataMode_Context/useDataMode";
import { getProductDetailsService } from "../services/productDetailsServices";

//remove the default logo value when data is passed properly, pass img src
const ProductDetails = () => {
  const { productId } = useParams();

  const [product, setProduct] = useState<Product>();

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    product?.productImage,
  );

  const { mode } = useDataMode();

  useEffect(() => {
    if (!productId) return;
    const fetchProduct = async () => {
      try {
        const productService = getProductDetailsService(mode);
        const data = await productService.getProductById(productId);

        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [productId, mode]);

  console.log(product, "product");

  if (!product) {
    return <Loading />;
  }

  return (
    <>
      <SecondNavbar logo={product?.productBrandLogo} />
      <Container>
        <ProductImages
          id={product?.id}
          // productImage={product?.productImage}
          productImage={selectedImage ? selectedImage : product?.productImage}
        />
        <ProductInfo
          id={product?.id}
          productId={product?.productId}
          productBrandLogo={product?.productBrandLogo}
          productBrand={product?.productBrand}
          productName={product?.productName}
          price={product?.price}
          wishlist={product?.wishlist}
          variants={product?.variants}
          setSelectedImage={setSelectedImage}
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
