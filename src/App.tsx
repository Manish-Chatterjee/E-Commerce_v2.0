// import React from 'react'
import AuthForm from "./features/auth/AuthForm";
import BlogPage from "./features/blogs/pages/BlogPage";
import BrandsPage from "./features/brands/pages/BrandsPage";
import CartPage from "./features/cart/CartPage";
import Products from "./features/products/Products";
import ShopPage from "./features/shop/pages/ShopPage";
import "./shared/styles/GlobalStyles.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  // console.log(formatPrice(50000))
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<AuthForm mode="login" />} />
            <Route path="/signup" element={<AuthForm mode="signup" />} />
            <Route path="/products" element={<Products />}>
              <Route path="brands" element={<BrandsPage />} />
              <Route path="shop" element={<ShopPage />}>
                {/* <Route path=":id" element={} /> */}
              </Route>
              <Route path="blog" element={<BlogPage />} />
            </Route>
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
