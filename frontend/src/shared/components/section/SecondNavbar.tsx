import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Navbar/ui/Cart";
import { useRouteInfo } from "../../../hooks/useRouteInfo";

type Props = {
  logo: string | undefined;
};

const SecondNavbar = ({ logo }: Props) => {
  //   const navigate = useNavigate();

  const navigate = useNavigate();
  const { pathname, prevPath } = useRouteInfo();

  const handleBack = () => {
    // Rule-based navigation
    if (pathname === "/checkout" || pathname === "/orderHistory") {
      navigate("/products/shop");
      return;
    }

    // fallback to previous route
    if (prevPath) {
      navigate(prevPath);
    } else {
      //   navigate("/");
      navigate(-1);
    }
  };

  return (
    <Container>
      <BackBtn onClick={handleBack}>
        <ArrowBackIcon />
      </BackBtn>
      <Image src={logo} alt={logo} />
      <Cart />
    </Container>
  );
};

export default SecondNavbar;

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  height: fit-content;
  margin: 0 auto 20px;
  /* border: 1px solid gray; */
  border-radius: 0 0 10px 10px;
  box-shadow: 0 0 10px gray;
`;

const BackBtn = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  cursor: pointer;
`;

const Image = styled.img`
  height: 30px;
  margin-block: 10px;
`;
