import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Link } from "react-router-dom";

type AuthFormProps = {
  mode: "login" | "signup";
};

const AuthForm = ({ mode }: AuthFormProps) => {
  const isSignup = mode === "signup";
  return (
    <Container>
      {isSignup ? <h2>Sign Up</h2> : <h2>Login</h2>}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <FormStyle>
          {isSignup && (
            <div>
              <Label>Name</Label>
              <FieldStyle name="name" type="text" />
            </div>
          )}
          <div>
            <Label>E-mail</Label>
            <FieldStyle name="email" type="email" />
          </div>
          <div>
            <Label>Password</Label>
            <FieldStyle name="password" type="password" />
          </div>

          <Button type="submit">{isSignup ? "Sign Up" : "Login"}</Button>
        </FormStyle>
      </Formik>

      {isSignup ? (
        <RoutingLink>
          Have an account already &nbsp;
          <LinkStyled to="/login">Login</LinkStyled>
        </RoutingLink>
      ) : (
        <RoutingLink>
          New to ESNTL &nbsp;<LinkStyled to="/signup">Sign Up</LinkStyled>
        </RoutingLink>
      )}
    </Container>
  );
};

export default AuthForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background: url("https://img.freepik.com/free-vector/mountain-lake-sunset-landscape-realistic-tree-forest-mountain-silhouettes-evening-wood-panorama-illustration-wild-nature-background_1150-39419.jpg?semt=ais_rp_progressive&w=740&q=80");
  /* background-repeat: no-repeat;
  object-fit: cover; */
`;
const FormStyle = styled(Form)`
  border: 2px dashed black;
  width: fit-content;
  border-radius: 15px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 40px;

  /* Glassmorphism */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.5),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 20px 1px rgba(255, 255, 255, 1);
`;

const FieldStyle = styled(Field)`
  width: 400px;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  border-radius: 5px;
  outline: none;
  font-size: 20px;
  font-weight: 600;
  background-color: transparent;
  padding-inline: 10px;
  box-sizing: border-box;
`;

const Label = styled.p`
  margin: 5px 0;
  /* font-weight: 600; */
  font-size: 16px;
`;

const RoutingLink = styled.div`
  display: flex;
  margin-top: 10px;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 600;
`;
