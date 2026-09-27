import ProductsCard from "./ProductsCard";
// import products from "../../../shared/sampleData/shopPage.json";
import styled from "styled-components";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
// import { getAllProducts } from "../api/shopApi";
import type { Product } from "../types/product";
import Loading from "@/features/loading/Loading";
import { useDataMode } from "@/shared/context/DataMode_Context/useDataMode";
import { getShopService } from "../services/shopService";

type ProductsGridProps = {
  onAddToCart: () => void;
};

type ContextType = {
  searchQuery: string;
};

const ProductsGrid = ({ onAddToCart }: ProductsGridProps) => {
  const { searchQuery } = useOutletContext<ContextType>();

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const { mode } = useDataMode();
  console.log(mode,'shop mode')

  // getting from db through sb (or) local storage
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const shopService = getShopService(mode);

        const products = await shopService.getAllProducts();

        // console.log(products,'products LOCAL')
        setProducts(products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [mode]);
  /////////////////////////

  const filteredData = products.filter((item) =>
    item.productName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  if (loading) {
    return <Loading />;
  }

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
        <p>No item found</p>
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
