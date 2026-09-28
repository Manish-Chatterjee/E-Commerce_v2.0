import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";
import { useDataMode } from "@/shared/context/DataMode_Context/useDataMode";
import { getShopService } from "@/features/shop/services/shopService";

type WishlistBtnProps = {
  wishlist: boolean;
  productId: string;
};

const WishlistBtn = ({ wishlist, productId }: WishlistBtnProps) => {
  const [wishListed, setWishlisted] = useState(wishlist);

  const { mode } = useDataMode();

  const handleWishlist = async () => {
    try {
      const shopService = getShopService(mode);
      await shopService.updateWishlist(productId, !wishListed);
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
