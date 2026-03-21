// import React from 'react'
import AuthForm from "./features/auth/AuthForm";
import BlogPage from "./features/blogs/pages/BlogPage";
import BrandsPage from "./features/brands/pages/BrandsPage";
import CartPage from "./features/orderHistory/OrderHistory";
import MainIndexRoute from "./features/MainIndexRoute";
import Products from "./features/products/Products";
import ShopPage from "./features/shop/pages/ShopPage";
import "./shared/styles/GlobalStyles.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./features/checkout/pages/CheckoutPage";
import ErrorPage from "./features/error/pages/ErrorPage";
import { Suspense } from "react";
import OrderConfirmationPage from "./features/orderConfirmation/pages/OrderConfirmationPage";
import ProductDetails from "./features/ProductDetails/pages/ProductDetails";
import OrderHistory from "./features/orderHistory/OrderHistory";
import Wishlist from "./features/wishlist/pages/Wishlist";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <MainIndexRoute />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <MainIndexRoute />,
        },
        {
          path: "/login",
          element: <AuthForm mode="login" />,
        },
        {
          path: "/signup",
          element: <AuthForm mode="signup" />,
        },
        {
          path: "/products",
          element: <Products />,
          children: [
            {
              path: "brands",
              element: <BrandsPage />,
            },
            {
              path: "shop",
              element: <ShopPage />,
              children: [
                // future nested route
                // { path: ":id", element: <ProductDetails /> }
              ],
            },
            {
              path: "blog",
              element: <BlogPage />,
            },
          ],
        },
        {
          path: "/orderHistory",
          element: <OrderHistory />,
        },
        {
          path: "/checkout",
          element: <CheckoutPage />,
        },
        {
          path: "/orderConfirmed",
          element: <OrderConfirmationPage />,
        },
        {
          path: "/productDetails/:id",
          element: <ProductDetails />,
        },
        {
          path: "/wishlist",
          element: <Wishlist/>
        }
      ],
    },
  ]);

  return (
    <>
      <div className="App">
        <Suspense fallback={<h2>Loading page...</h2>}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </>
  );
};

export default App;
