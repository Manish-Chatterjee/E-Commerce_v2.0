import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";
import { updateWishlist } from "@/features/shop/api/shopApi";

type WishlistBtnProps = {
  wishlist: boolean;
  productId: string;
};

const WishlistBtn = ({ wishlist, productId }: WishlistBtnProps) => {
  const [wishListed, setWishlisted] = useState(wishlist);

  const handleWishlist = async () => {
  try {
    await updateWishlist(productId, !wishListed);
    setWishlisted(!wishListed);
  } catch (error) {
    console.error(error);
  }
};
  return (
    <>
      <Button onClick={handleWishlist}>
        {wishListed ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </Button>
    </>
  );
};

export default WishlistBtn;

const Button = styled.button`
  width: fit-content;
  background-color: transparent;
  border: none;
  outline: none;
`;
