import styled from "styled-components";
import { formatPrice } from "../../../shared/utils/formatPrice";
import Button from "../../../shared/components/ui/Button";
import WishlistBtn from "../../../shared/components/ui/WishlistBtn";
import { Link } from "react-router-dom";
import type { Product } from "../types/product";

// type ProductImage = {
//   [key: string]: string; // any key like img1, img2
// };

type CardProps = {
  items: Product;
  onAddToCart: () => void;
  disabled: boolean;
};

// const ProductsCard = ({ items, onAddToCart }: CardProps) => {
const ProductsCard = ({ items, disabled }: CardProps) => {
  const {
    // productImages,
    productName,
    productBrandLogo,
    price,
    productBrand,
    // id,
    productImage,
    wishlist,
    productId,
  } = items;

  return (
    <CardContainer $disabled={disabled}>
      <>
        <BrandContainer>
          <img src={productBrandLogo} about="brand" width={50} height={50} />
        </BrandContainer>
        <ProductImg
          src={productImage}
          alt="image"
          width={100}
          height={100}
          brand={productBrand}
          $disabled={disabled}
        />
      </>
      <Info>
        <ProductBrand>{productBrand}</ProductBrand>
        <span>
          <ProductName title={productName}>
            {/* {truncateText(productName, 25)} */}
            {productName}
          </ProductName>
          <div>Men's collection</div>
        </span>
        <Price>{formatPrice(price)}</Price>
      </Info>
      <BtnContainer>
        {/* <Button onClick={onAddToCart}>Add to Cart</Button> */}
        {disabled ? (
          <Text>Out of Stock</Text>
        ) : (
          <LinkStyled to={`/productDetails/${productId}`}>
            <Button>Customise</Button>
          </LinkStyled>
        )}

        {/* <Button>Buy Now</Button> */}
        <WishlistBtn wishlist={wishlist} productId={productId} />
      </BtnContainer>
    </CardContainer>
  );
};

export default ProductsCard;

const CardContainer = styled.div<{ $disabled: boolean }>`
  /* border: 1px solid black; */
  border-radius: 10px;
  width: 250px;
  aspect-ratio: 2/2.5;
  position: relative;
  padding: 15px;
  /* margin: 10px; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;

const BrandContainer = styled.div`
  width: 70px;
  height: 50px;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: white;
  border-radius: 0 0 0 20px;
  padding: 15px;
  z-index: 100;
  display: flex;
  align-items: center;

  & img {
    width: fit-content;
  }
`;

const ProductImg = styled.img<{ brand: string; $disabled: boolean }>`
  object-fit: cover;
  width: 100%;
  background-color: #d8d8d8;
  height: 60%;
  display: block;
  margin: auto;
  border-radius: 20px;
  /* background-image: url(${(props) => props.brand}); */

  filter: ${({ $disabled }) => ($disabled ? "grayscale(100%)" : "none")};
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  gap: 15px;

  padding: 15px 0;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.p`
  color: red;
  margin-block: auto;
  font-weight: 600;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #333333;
  font-weight: 600;
`;

const ProductBrand = styled.span`
  color: gray;
  font-size: 14px;
`;

const ProductName = styled.span`
  font-size: 20px;
  font-weight: 700;
  color: #111827;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  display: inline-block;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
`;
