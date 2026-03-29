import styled from "styled-components";
import Button from "../../../shared/components/ui/Button";
import { Link } from "react-router-dom";
// import StatusBar from "./ui/StatusBar";

const StatusDisplay = () => {
  return (
    <Container>
      <div>
        <h3>Woohoo! Your order is confirmed.</h3>
        <p>
          ESNTL will start working on this right away.
          <br />
          We'll email you as soon as it ships.
        </p>
      </div>

      {/* <div><StatusBar/></div> */}

      <div>
        {/* <LinkStyled to="/orderHistory" replace> */}
        <LinkStyled to="/products/brands" replace>
          <Button>View your order</Button>
        </LinkStyled>
        <span>
          Delivery times are estimated. If you're experiencing difficulty with
          this order, please <Link to="">contact the seller</Link>. See{" "}
          <Link to="">more info</Link>.
        </span>
      </div>
    </Container>
  );
};

export default StatusDisplay;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;

    h3 {
      margin-block: 20px;
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  margin: 20px 0 10px 0;
`;
