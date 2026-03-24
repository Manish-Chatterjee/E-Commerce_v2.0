import styled from "styled-components";

const CustomerDetails = () => {
  return (
    <Container>
      <h3>Customer details</h3>
      <InfoContainer>
        <div>
          <h5>Contact</h5>
          <p>Email: mail@gmail.com</p>
          <p>Phone: +61 3724987612</p>
          <h5>Bank accounts and cards</h5>
          <CardDetails>
            <span>Credit card:</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/Visa_Inc._logo_%282014%E2%80%932021%29.svg"
              alt=""
              width={50}
              height={50}
            />
            <span>Visa</span>
            <span>xxxx-0987</span>
          </CardDetails>
        </div>

        <div>
          <h5>Billing address</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
            vitae.
          </p>
        </div>
      </InfoContainer>
    </Container>
  );
};

export default CustomerDetails;

const Container = styled.div`
  /* margin: auto; */
  /* width: 60%; */
`;

const InfoContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  gap: 100px;
`;

const CardDetails = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;
