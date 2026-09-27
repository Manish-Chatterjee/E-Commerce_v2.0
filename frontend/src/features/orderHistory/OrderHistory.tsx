import styled from "styled-components";
import ProductCard from "./components/ProductCard";
import Button from "../../shared/components/ui/Button";
import SecondNavbar from "../../shared/components/section/SecondNavbar";
import { useEffect, useState } from "react";
import type { Order } from "./types/OrderTypes";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from "../auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useDataMode } from "@/shared/context/DataMode_Context/useDataMode";
import { getOrderHistoryService } from "./services/orderHistoryServices";

const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOpt, setFilteredOpt] = useState<string>("");

  const { mode } = useDataMode();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const getService = getOrderHistoryService(mode);
        const data = await getService.getOrders();

        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [mode]);

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

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handlelogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  return (
    <>
      <SecondNavbar logo="" />
      <CartHeader>
        <Greetings>
          <Greet>Good {getGreeting()}</Greet>
          <Name>{user?.username ?? "Guest"}</Name>
        </Greetings>
        <Header>Order History</Header>
        <Button title="Logout" onClick={handlelogout}>
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
        {/* {orders.length !== 0 && (
          <StatusContainer>
            <ButtonSidebar onClick={() => setFilteredOpt("")}>
              All <Number>3</Number>
            </ButtonSidebar>
            {orders?.map((items) => {
              return (<ButtonSidebar onClick={() => setFilteredOpt(items.status)}>
                 {items.status}<Number>2</Number>
              </ButtonSidebar>
              )
            })}
          </StatusContainer>
        )} */}
        {orders.length !== 0 && (
          <StatusContainer>
            <ButtonSidebar onClick={() => setFilteredOpt("")}>
              All <Number>{orders.length}</Number>
            </ButtonSidebar>

            {[...new Set(orders.map((item) => item.status))].map((status) => (
              <ButtonSidebar
                key={status}
                onClick={() => setFilteredOpt(status)}
              >
                {status}
                <Number>
                  {orders.filter((item) => item.status === status).length}
                </Number>
              </ButtonSidebar>
            ))}
          </StatusContainer>
        )}

        <ProductCard orders={orders} filteredOpt={filteredOpt} />
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
  align-items: start;
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
  margin-left: 20px;
`;

const Header = styled.p`
  font-weight: 800;
  font-size: 30px;
  text-transform: uppercase;
  margin: auto;
`;
