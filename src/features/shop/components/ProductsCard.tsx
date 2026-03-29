import styled from "styled-components";
import { formatPrice } from "../../../shared/utils/formatPrice";
import Button from "../../../shared/components/ui/Button";
import { truncateText } from "../../../shared/utils/truncateText";
import WishlistBtn from "../../../shared/components/ui/WishlistBtn";
import { Link } from "react-router-dom";

// import product from '../../../shared/sampleData/products.json'

// type Product = {
//   productImage: string;
//   productImageHover: string;
//   productName: string;
//   productPrice: number;
//   ratings: number[];
//   productBrand: string;
// };

type ProductImage = {
  [key: string]: string; // any key like img1, img2
};

type Product = {
  id: number;
  productBrand: string;
  productBrandLogo: string;
  productID: string;
  productName: string;
  price: number;
  colors: string[];
  sizes: number[];
  // productImages: ProductImage[];
  productImages: string[];
};

type CardProps = {
  items: Product;
  onAddToCart: () => void;
};

const ProductsCard = ({ items, onAddToCart }: CardProps) => {
  const {
    productImages,
    productName,
    productBrandLogo,
    price,
    productBrand,
    id,
  } = items;
  // const firstImageUrl = productImages.length
  //   ? Object.values(productImages[0])[0]
  //   : "";

  return (
    <CardContainer>
      <>
        <BrandContainer
          src={productBrandLogo}
          about="brand"
          width={50}
          height={50}
        />
        <ProductImg
          src={productImages[0]}
          alt="image"
          width={100}
          height={100}
          brand={productBrand}
        />
      </>
      <Info>
        <h4>{truncateText(productName, 30)}</h4>
        <p>{formatPrice(price)}</p>
      </Info>
      <BtnContainer>
        {/* <Button onClick={onAddToCart}>Add to Cart</Button> */}
        <Link to={`/productDetails/${id}`}>
          <Button>Customise</Button>
        </Link>

        {/* <Button>Buy Now</Button> */}
        <WishlistBtn />
      </BtnContainer>
    </CardContainer>
  );
};

export default ProductsCard;

const CardContainer = styled.div`
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
`;

const ProductImg = styled.img<{ brand: string }>`
  object-fit: cover;
  width: 100%;
  background-color: #d8d8d8;
  height: 60%;
  display: block;
  margin: auto;
  border-radius: 20px;
  /* background-image: url(${(props) => props.brand}); */
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
