// import React from 'react'
import AuthForm from "./features/auth/AuthForm";
import CartPage from "./features/cart/CartPage";
import ProductsShop from "./features/products/pages/ProductsShop";
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
            <Route path="/productShop" element={<ProductsShop />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
