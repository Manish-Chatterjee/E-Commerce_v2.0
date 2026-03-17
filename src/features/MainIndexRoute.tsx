import React from "react";
import { Link } from "react-router-dom";

const MainIndexRoute = () => {
  return (
    <>
      <Link to="/login">Login</Link>
      <br />
      <Link to="/signup">Signup</Link>
      <br />
      <Link to="/products/brands">brands</Link>
      <br />
      <Link to="/products/shop">shop</Link>
      <br />
      <Link to="/products/blog">blog</Link>
      <br />
      <Link to="/cart">cart</Link>
      <br/>
      <Link to="/checkout">checkout</Link>
    </>
  );
};

export default MainIndexRoute;
