import { getAllProducts } from "@/features/shop/api/shopApi";
import type { Product } from "@/features/shop/types/product";
import Button from "@/shared/components/ui/Button";
import { useEffect, useState } from "react";
import styled from "styled-components";
import SecondNavbar from "@/shared/components/section/SecondNavbar";
import { useNavigate } from "react-router-dom";
import WishlistBtn from "@/shared/components/ui/WishlistBtn";

const Wishlist = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getAllProducts();
        setProducts(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    console.log(products, "All Products");
  }, [products]);

  const filteredWishlist = products.filter((items) => items.wishlist);

  const navigate = useNavigate();
  const productDetails = (productId: string) => {
    navigate(`/productDetails/${productId}`);
  };

  return (
    <>
      <SecondNavbar logo={""} />
      {filteredWishlist.map((item) => (
        <Container key={item.id}>
          <Img src={item.productImage} alt="img" width={300} />
          <Info>
            <span>
              <h4>{item.productName}</h4>
              <p>₹{item.price}</p>
            </span>
            <BtnContainer>
              <Button onClick={() => productDetails(item.productId)}>
                Customise
              </Button>
              <WishlistBtn wishlist={item.wishlist} id={item.id} />
            </BtnContainer>
          </Info>
        </Container>
      ))}
    </>
  );
};

export default Wishlist;

const Container = styled.div`
  border: 1px solid rgb(146, 146, 146);
  border-radius: 15px;
  display: flex;
  margin: 20px;
  max-height: 200px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;
`;

const Img = styled.img`
  margin: 20px;
  object-fit: contain;
`;

const BtnContainer = styled.span`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
