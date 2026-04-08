import Navbar from "../../shared/components/section/Navbar/Navbar";
import Footer from "../../shared/components/section/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Container>
      <Navbar setSearchQuery={setSearchQuery} />
      <Outlet context={{ searchQuery }} />
      <Footer />
    </Container>
  );
};

export default Products;

const Container = styled.div`
  margin: 0;
  padding: 0;

  width: 100%;
`;
