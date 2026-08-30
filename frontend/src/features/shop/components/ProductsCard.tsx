import styled from "styled-components";
import { formatPrice } from "../../../shared/utils/formatPrice";
import Button from "../../../shared/components/ui/Button";
import { truncateText } from "../../../shared/utils/truncateText";
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
    id,
    productImage,
    wishlist,
    productId
  } = items;

  return (
    <CardContainer $disabled={disabled}>
      <>
        <BrandContainer
          src={productBrandLogo}
          about="brand"
          width={50}
          height={50}
        />
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
        <h4 title={productName}>{truncateText(productName, 15)}</h4>
        <p>{formatPrice(price)}</p>
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
        <WishlistBtn wishlist={wishlist} id={id}/>
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

const BrandContainer = styled.img`
  width: 70px;
  height: fit-content;
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: white;
  border-radius: 0 0 0 20px;
  padding: 15px;
  z-index: 100;
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
  justify-content: space-between;
  align-items: center;

  h4 {
    width: 55%;
  }

  p {
    width: 35%;
    font-weight: 600;
    font-size: 22px;
  }
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
