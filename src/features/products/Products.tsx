import Navbar from "../../shared/components/section/Navbar/Navbar";
import Footer from "../../shared/components/section/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
      <Footer />
    </>
  );
};

export default Products;
