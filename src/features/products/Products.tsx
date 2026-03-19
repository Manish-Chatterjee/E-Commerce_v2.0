import Navbar from "../../shared/components/section/Navbar/Navbar";
import Footer from "../../shared/components/section/Footer";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Products;
