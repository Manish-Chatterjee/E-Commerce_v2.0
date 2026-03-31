import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "styled-components";

const WishlistBtn = () => {
  const [wishListed, setWishlisted] = useState(false);
  return (
    <>
      <Button onClick={() => setWishlisted(!wishListed)}>
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
