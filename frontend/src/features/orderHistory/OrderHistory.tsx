import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import Button from "../../shared/components/ui/Button";
import SecondNavbar from "../../shared/components/section/SecondNavbar";
import { useEffect, useState } from "react";
import type { Order } from "./types/OrderTypes";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../auth/hooks/useAuth";

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/orders", {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await response.json();

        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const getGreeting = () => {
    const hours = new Date().getHours();

    if (hours < 12) {
      return "Morning";
    } else if (hours < 17) {
      return "Afternoon";
    } else {
      return "Evening";
    }
  };

  const {user} = useAuth();

  return (
    <>
      <SecondNavbar logo="" />
      <CartHeader>
        <Greetings>
          <Greet>Good {getGreeting()}</Greet>
          <Name>{user?.username ?? "Guest"}</Name>
        </Greetings>
        <Header>Order History</Header>
        <Button title="Logout">
          <LogoutIcon />
        </Button>
        {/* <Button>icon Profile</Button>
        <Button>icon Wishlist</Button>
        <Button>icon My Order</Button>
        <Button>icon Saved Address</Button>
        <Button>icon Change Password</Button>
        <Button>icon Logout</Button> */}
      </CartHeader>

      <hr />

      <ProductContainer>
        {orders.length !== 0 && (
          <StatusContainer>
            <ButtonSidebar>
              On the way <Number>2</Number>
            </ButtonSidebar>
            <ButtonSidebar>
              Returned <Number>10</Number>
            </ButtonSidebar>
            <ButtonSidebar>
              Cancelled <Number>5</Number>
            </ButtonSidebar>
          </StatusContainer>
        )}

        <ProductCard orders={orders} />
      </ProductContainer>
    </>
  );
};

export default OrderHistory;

const CartHeader = styled.div`
  /* background-color: gray; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 30px;
`;

const Greetings = styled.span``;

const Greet = styled.p`
  color: gray;
  font-size: 14px;
  margin: 0;
  padding: 0;
`;

const Name = styled.p`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  padding: 0;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StatusContainer = styled.div`
  /* border: 2px dotted gray; */
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex: 1;
  align-items: center;
`;

const Number = styled.div`
  background-color: #e0e0e0;
  color: black;
  border-radius: 100px;
  display: inline-block;
  width: 15px;
  height: 15px;
  padding: 15px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductContainer = styled.div`
  /* border: 2px dashed red; */
  display: flex;
`;

const ButtonSidebar = styled(Button)`
  width: fit-content;
`;

const Header = styled.p`
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
  margin: auto;
`;
