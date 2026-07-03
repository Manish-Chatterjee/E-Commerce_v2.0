import { useState } from "react";
import ProductsGrid from "../components/ProductsGrid";
import SnackBarAlert from "../../../shared/components/ui/SnackBarAlert";
import { Outlet } from "react-router-dom";

const ShopPage = () => {
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    if (open) {
      setOpen(false); // close first
      setTimeout(() => setOpen(true), 50); // reopen
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <ProductsGrid onAddToCart={handleAddToCart} />
      <SnackBarAlert
        open={open}
        handleClose={handleClose}
        message="Item added to cart"
      />

      <Outlet />
    </div>
  );
};

export default ShopPage;
