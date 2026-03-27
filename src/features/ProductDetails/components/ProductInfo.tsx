// import React from "react";
import { useState } from "react";
import styled from "styled-components";
import AddToCartBtn from "./ui/AddToCartBtn";
import WishlistBtn from "../../../shared/components/ui/WishlistBtn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SnackBarAlert from "../../../shared/components/ui/SnackBarAlert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { useParams } from "react-router-dom";

// import Products from "../../../shared/sampleData/shopPage.json";
import { formatPrice } from "../../../shared/utils/formatPrice";
// import { addToCart } from "../../../shared/utils/addToCart";
import { useCart } from "../../../shared/context/CartContext";

type ButtonProps = {
  image: string;
  selected: boolean;
};

// type Props = {
//   productId: number;
// };

type Product = {
  id?: number;
  productBrand?: string;
  productBrandLogo?: string;
  productID?: string;
  productName?: string;
  price?: number;
  colors?: string[];
  sizes?: number[];
};

// type ProductImage = {
//   [key: string]: string; // any key like img1, img2
// };

const ProductInfo = ({
  id,
  productBrand,
  productBrandLogo,
  productName,
  productID,
  price,
}: Product) => {
  // const { id } = useParams();
  // const productId = Number(id);
  // const productData = Products.find((item) => item.id === productId);
  // const { productBrand, productBrandLogo, productID, productName, price } =
  //   productData;

  const { addToCart } = useCart(); // Context api for using cart

  //////////////////////////SNACKBAR//////////////////
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);

    if (open) {
      setOpen(false); // close first
      setTimeout(() => setOpen(true), 50); // reopen
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  /////////////////////////////////////////////

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const sizes = [6, 7, 8, 9, 10, 11];
  return (
    <>
      <Container>
        <BrandingContainer>
          <Brand>
            <img src={productBrandLogo} alt="logo" width={30} />
            <span>{productBrand}</span>
          </Brand>
          <p>{productID}</p>
        </BrandingContainer>
        <h4>{productName}</h4>
        <H3>{formatPrice(price)}</H3>
        <div>
          <span>
            <span>color</span>
            <span>white</span>
          </span>
          <ProductSelection>
            {products.map((item) => (
              <>
                <Button
                  image="https://www.superkicks.in/cdn/shop/files/5-2026-02-09T173219.662.png?v=1770638590&width=533"
                  key={item.id}
                  selected={selectedId === item.id}
                  onClick={() => setSelectedId(item.id)}
                ></Button>
              </>
            ))}
          </ProductSelection>
        </div>
        <div>
          <span>
            <span>Size</span>
            <span>EU Men</span>
          </span>

          <SizeContainer>
            {sizes.map((size) => (
              <button>{size}</button>
            ))}
          </SizeContainer>

          <p>Size guide</p>
        </div>
        <BtnContainer>
          <AddToCartBtn onAddToCart={handleAddToCart} />
          <WishlistBtn />
        </BtnContainer>

        <DeliveryMsg>
          <LocalShippingIcon />
          <p>Free delivery on orders over $30.0</p>
        </DeliveryMsg>

        {/* Alert */}
        <SnackBarAlert
          open={open}
          handleClose={handleClose}
          message={
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              Item added to cart
              <CheckCircleIcon fontSize="small" sx={{ color: "green" }} />
            </span>
          }
        />
      </Container>
    </>
  );
};

export default ProductInfo;

const Container = styled.div`
  /* border: 2px dashed black; */
  /* flex: 1; */
  width: 50%;
  margin: 20px;
  padding: 40px 60px;
  box-sizing: border-box;
`;

const Brand = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: 10px;
  /* border: 2px solid black; */
`;

const BrandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H3 = styled.h3`
  font-weight: 700;
`;

// const Image = styled.img`
//   height: 50px;
//   /* width: 30px; */
// `;

const ProductSelection = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button<ButtonProps>`
  width: 50px;
  aspect-ratio: 1/1.5;
  /* height: 60px; */
  background: ${({ image }) => `url(${image}) center/cover no-repeat`};
  border: ${({ selected }) => (selected ? "3px solid #000" : "1px solid #ccc")};
  background-size: contain;
  border-radius: 10px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.1);
  }
`;

const SizeContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: row;

  button {
    display: inline;
    margin: 0;
    padding: 0;
    width: 50px;
    aspect-ratio: 1/1;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px 0;
`;

const DeliveryMsg = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;

  p {
    margin: 0;
    padding: 0;
    font-weight: 600;
  }
`;
