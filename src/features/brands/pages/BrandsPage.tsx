import React from "react";
import BrandCard from "../components/BrandCard";
import brandInfo from "../../../shared/sampleData/brandsPage.json"
import { useOutletContext } from "react-router-dom";

type ContextType = {
  searchQuery: string;
};

const BrandsPage = () => {
  const { searchQuery } = useOutletContext<ContextType>();
  return (
    <div>
      {brandInfo
      .filter((brands) => brands.brand.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .map((item) => (
        <BrandCard brand={item.brand} index={item.index} />
      ))}
    </div>
  );
};

export default BrandsPage;
