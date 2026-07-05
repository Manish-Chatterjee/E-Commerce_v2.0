import styled from "styled-components";

const ErrorPage = () => {
  // const data = useRouteError();
  // console.log(data,'error')

  return (
    <Container>
      <div>
        <ErrorTxt>ERROR</ErrorTxt>
        <ErrorStatus>404</ErrorStatus>
      </div>
      <ErrorMsg>Something went off !!</ErrorMsg>
    </Container>
  );
};

export default ErrorPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ErrorTxt = styled.h1`
  font-size: 160px;
  /* border: 2px solid black; */
  font-weight: 700;
  color: #a2a2a2;
`;

const ErrorStatus = styled.p`
  font-size: 30px;
  font-weight: 800;
  font-size: 50px;
  color: white;
  -webkit-text-stroke: 2px black;
  text-align: center;
`;

const ErrorMsg = styled.p`
  font-size: 30px;
  font-weight: 700;
`;
