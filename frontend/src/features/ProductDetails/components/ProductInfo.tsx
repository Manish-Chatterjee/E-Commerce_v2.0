import { useState } from "react";
import styled from "styled-components";
import AddToCartBtn from "./ui/AddToCartBtn";
import WishlistBtn from "../../../shared/components/ui/WishlistBtn";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SnackBarAlert from "../../../shared/components/ui/SnackBarAlert";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { formatPrice } from "../../../shared/utils/formatPrice";

import { useCart } from "../../../shared/context/Cart_Context/useCart";

type ButtonProps = {
  image: string;
  selected: boolean;
};

type ProductSize = {
  size: number;
  available: boolean;
  stock?: number;
  sku?: string;
};

type Product = {
  id?: number;
  productBrand?: string;
  productBrandLogo?: string;
  productID?: string;
  productName?: string;
  price?: number;
  colors?: string[];
  sizes?: ProductSize[];
};

const ProductInfo = ({
  id,
  productBrand,
  productBrandLogo,
  productName,
  productID,
  price,
}: Product) => {
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

  const [selectedColorId, setSelectedColorId] = useState<number | null>(null);
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const products = [{ id: 1 }, { id: 2 }, { id: 3 }];
  // const sizes = [6, 7, 8, 9, 10, 11];
  const sizes = [
    { size: 6, available: true },
    { size: 7, available: true },
    { size: 8, available: false },
    { size: 9, available: true },
    { size: 10, available: false },
  ];
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
                  selected={selectedColorId === item.id}
                  onClick={() => setSelectedColorId(item.id)}
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
              <SizeButton
                key={size.size}
                $available={size.available}
                disabled={!size.available}
                $selected={selectedSize === size.size}
                onClick={() => size.available && setSelectedSize(size.size)}
              >
                {size.size}
              </SizeButton>
            ))}
          </SizeContainer>

          <p>Size guide</p>
        </div>
        <BtnContainer>
          <AddToCartBtn onAddToCart={handleAddToCart} disabled={selectedColorId == null || selectedSize == null}/>
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
          message="Item added to cart"
        />
      </Container>
    </>
  );
};

export default ProductInfo;

const Container = styled.div`
  width: 50%;
  margin: 20px;
  padding: 40px 60px;
  box-sizing: border-box;

  @media (max-width: 840px) {
    width: 80%;
    padding: 10px;
  }
`;

const Brand = styled.span`
  display: flex;
  align-items: center;
  width: fit-content;
  height: fit-content;
  gap: 10px;
`;

const BrandingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const H3 = styled.h3`
  font-weight: 700;
`;

const ProductSelection = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button<ButtonProps>`
  width: 50px;
  aspect-ratio: 1/1.5;

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

const SizeButton = styled.button<{ $available: boolean; $selected: boolean }>`
  background-color: ${({ $available }) => ($available ? "#fff" : "#f5f5f5")};

  color: ${({ $available }) => ($available ? "#000" : "#999")};

  cursor: ${({ $available }) => ($available ? "pointer" : "not-allowed")};

  opacity: ${({ $available }) => ($available ? 1 : 0.5)};

  position: relative;
  overflow: hidden;

  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: white;

  &::after {
    content: "";
    display: ${({ $available }) => ($available ? "none" : "block")};

    position: absolute;
    top: 6px;
    right: 6px;

    width: 0.5px;
    height: 42px;

    background: #4c4c4c;

    transform: rotate(45deg);
    transform-origin: top center;
  }

  border: 1px solid ${({ $selected }) => ($selected ? "#000" : "#d9d9d9")};

  &:hover {
    border-color: ${({ $available }) => ($available ? "#000" : "#d9d9d9")};
  }

    &:disabled {
    cursor: not-allowed;
  }
`;
