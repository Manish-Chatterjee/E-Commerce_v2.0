import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import AuthBg from "../../assets/AuthBg.jpg";

type AuthFormProps = {
  mode: "login" | "signup";
};

const AuthForm = ({ mode }: AuthFormProps) => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const isSignup = mode === "signup";
  return (
    <Container>
      {isSignup ? <H2>Sign Up</H2> : <H2>Login</H2>}
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        // onSubmit={(values) => {
        //   console.log(values);
        // }}
        onSubmit={(values) => {
          if (isSignup) {
            const success = signup(values);

            if (!success) {
              alert("User already exists");
              return;
            }

            alert("Signup successful");
            navigate("/login");
          } else {
            const success = login(values);

            if (!success) {
              alert("Invalid credentials");
              return;
            }

            alert("Login successful");
            navigate("/products/brands");
          }
        }}
      >
        <FormStyle>
          {isSignup && (
            <div>
              <Label>Name</Label>
              <FieldStyle name="name" type="text" required />
            </div>
          )}
          <div>
            <Label>E-mail</Label>
            <FieldStyle name="email" type="email" required />
          </div>
          <div>
            <Label>Password</Label>
            <FieldStyle name="password" type="password" required />
          </div>

          <Button type="submit">{isSignup ? "Sign Up" : "Login"}</Button>

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
        </FormStyle>
      </Formik>
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

  background: url(${AuthBg});
  background-size: cover;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-family: "Alex Brush", cursive;
  font-style: normal;
  font-size: 48px;
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
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
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
  font-size: 16px;
`;

const RoutingLink = styled.div`
  font-size: 18px;
  text-align: center;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;
