import ProductsCard from "./ProductsCard";
// import products from "../../../shared/sampleData/shopPage.json";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllProducts } from "../api/shopApi";
import type { Product } from "../types/product";

type ProductsGridProps = {
  onAddToCart: () => void;
};

type ContextType = {
  searchQuery: string;
};

const ProductsGrid = ({ onAddToCart }: ProductsGridProps) => {
  const { searchQuery } = useOutletContext<ContextType>();

  const [products, setProducts] = useState<Product[]>([])

  // getting from db through sb
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getAllProducts();
        // console.log(products, "All Products");
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);
  /////////////////////////
  
  const filteredData = products.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <ProductCardsContainer>
      {filteredData.length > 0 ? (
        filteredData.map((items) => (
          <ProductsCard
            key={items.id}
            items={items}
            onAddToCart={onAddToCart}
            disabled={!items.stockAvailability}
          />
        ))
      ) : (
        <p>No item match found</p>
      )}
    </ProductCardsContainer>
  );
};

export default ProductsGrid;

const ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  padding: 20px;

  justify-content: center;
  align-items: center;
  place-items: center;
`;
