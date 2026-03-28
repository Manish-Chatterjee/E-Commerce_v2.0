import Badge from "@mui/material/Badge";
import type { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { getCartCount } from "../../../../utils/getCartCount";
import { useEffect, useState } from "react";
import { useCart } from "../../../../context/CartContext";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function Cart() {
  // const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   setCartCount(getCartCount());
  // }, []);

  const { cartCount } = useCart();
  // console.log(cartCount,'cartCount')

  return (
    <Link to="/checkout">
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={cartCount} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
