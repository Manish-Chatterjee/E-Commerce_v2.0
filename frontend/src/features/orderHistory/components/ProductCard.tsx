import styled from "styled-components";
import { GoDotFill } from "react-icons/go";
import { LuDot, LuTruck } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropright } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import ProductItem from "./ProductItem";
import Button from "../../../shared/components/ui/Button";
import { formatPrice } from "../../../shared/utils/formatPrice";
import type { Order } from "../types/OrderTypes";
import No_Order_Yet from "@/assets/no-orders-yet.webp";

type ProductCardProps = {
  orders: Order[];
  filteredOpt: string;
};

type OrderStatus =
  | "DELIVERED"
  | "SHIPPED"
  | "PROCESSING"
  | "CANCELLED"
  | "OUT_FOR_DELIVERY";

const statusColors: Record<OrderStatus, { bg: string; color: string }> = {
  DELIVERED: {
    bg: "#0080002c",
    color: "#008000",
  },
  SHIPPED: {
    bg: "#0000ff2c",
    color: "#0000cc",
  },
  PROCESSING: {
    bg: "#ffa5002c",
    color: "#cc8400",
  },
  CANCELLED: {
    bg: "#ff00002c",
    color: "#ca0000",
  },
  OUT_FOR_DELIVERY: {
    bg: "#f2ff002c",
    color: "#af6101",
  },
};

const ProductCard = ({ orders, filteredOpt }: ProductCardProps) => {
  // const [orders, setOrders] = useState<Order[]>([]);

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const response = await fetch("http://localhost:8080/api/orders", {
  //         credentials: "include",
  //       });

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch orders");
  //       }

  //       const data = await response.json();

  //       setOrders(data);
  //     } catch (error) {
  //       console.error("Error fetching orders:", error);
  //     }
  //   };

  //   fetchOrders();
  // }, []);

const filteredItems = orders.filter((item) => {
  if (filteredOpt === "") {
    return true;
  } else {
    return item.status === filteredOpt.toUpperCase()
  }
});

  return (
    <>
      <Container>
        {orders.length === 0 ? (
          <NoOrders>
            <img
              src={No_Order_Yet}
              alt="https://cdni.iconscout.com/illustration/premium/thumb/no-orders-yet-illustration-svg-download-png-13391226.png"
              width={400}
            />
            <h4>No orders yet</h4>
          </NoOrders>
        ) : (
          filteredItems.map((order) => (
            <CardContainer>
              {/* <p>Order ID</p> */}
              <IDandStatus>
                <IDContainer>
                  <IoBagHandleOutline />
                  {/* <span>CTH-89765</span> */}
                  <span>Order #{order.orderNumber}</span>
                </IDContainer>
                <StatusContainer>
                  <span>Estimated arrival: 28 May 2054</span>
                  <Status $status={order.status}>
                    <GoDotFill /> {order.status}
                  </Status>
                </StatusContainer>
              </IDandStatus>

              <LocationInfo>
                <Location>
                  <LuTruck />
                  Bangalore, India
                </Location>
                <MidLine>
                  <LuDot />
                  <LocationLine></LocationLine>
                  <IoMdArrowDropright />
                </MidLine>
                <Location>
                  <CiLocationOn />
                  Bangalore, India
                </Location>
              </LocationInfo>

              {order.items.map((item) => (
                <ProductItem
                  ProductName={item.product.productName}
                  Color={item.variant.color}
                  Size={item.variant.size}
                  Quantity={item.quantity}
                  Price={item.price}
                  Image={item.variant.images}
                />
              ))}

              <PricingDetails>
                <span>
                  <Total>{`Total: ${formatPrice(order.totalAmount)}`}</Total>
                </span>
                {/* <CancelButton disabled={order.status === "DELIVERED" || order.status === "OUT_FOR_DELIVERY"}>Cancel Order</CancelButton> */}
                <CancelButton
                  disabled={[
                    "DELIVERED",
                    "OUT_FOR_DELIVERY",
                    "CANCELLED",
                  ].includes(order.status)}
                >
                  Cancel Order
                </CancelButton>
              </PricingDetails>

              <hr />
            </CardContainer>
          ))
        )}
      </Container>
    </>
  );
};

export default ProductCard;

const Container = styled.div`
  /* display: flex; */
  border-radius: 5px;
  flex: 4;
  margin-right: 20px;
`;

const CardContainer = styled.div`
  /* border: 2px dashed blue; */
  margin-bottom: 40px;
`;

const Status = styled.span<{ $status: string }>`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 3px;
  width: fit-content;

  background-color: ${({ $status }) =>
    statusColors[$status as keyof typeof statusColors]?.bg || "#8080802c"};

  color: ${({ $status }) =>
    statusColors[$status as keyof typeof statusColors]?.color || "#666666"};
`;

const Location = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid gray;
  border-radius: 100px;
  width: fit-content;
  padding: 5px;
`;

const LocationLine = styled.div`
  border: 1px dashed black;
  height: 0px;
  width: 100px;
  display: inline-block;
  margin: 0;
  padding: 0;
`;

const MidLine = styled.span`
  display: flex;
  align-items: center;
`;

const LocationInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const IDandStatus = styled.div`
  display: flex;
  justify-content: space-between;
`;

const IDContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const StatusContainer = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PricingDetails = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  position: relative;
`;

const Total = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

const CancelButton = styled(Button)`
  position: absolute;
  right: 10px;
  font-weight: 600;
  &:disabled {
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    color: white;
    background-color: red;
    border: none;
    outline: none;
  }
`;

const NoOrders = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px dashed red; */
  flex: 1;
`;
