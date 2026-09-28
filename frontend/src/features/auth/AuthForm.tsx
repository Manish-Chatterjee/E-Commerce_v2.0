import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import { Button } from "./components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import AuthBg from "../../assets/AuthBg.jpg";
import SnackBarAlert from "../../shared/components/ui/SnackBarAlert";
import { useEffect, useState } from "react";
import { BouncingDots } from "@/components-ui/bouncing-dots";
import DataModeToggle from "@/shared/components/ui/DataModeToggle";
import { FaEye, FaEyeSlash } from "react-icons/fa";

type AuthFormProps = {
  mode: "login" | "signup";
};

const AuthForm = ({ mode }: AuthFormProps) => {
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // SnackBar Alert
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState<"success" | "error">("success");
  const handleClose = () => {
    setOpen(false);
  };
  // SnackBar Alert

  const isSignup = mode === "signup";
  return (
    <Container>
      <DataModeToggle />
      {isSignup ? <H2>Sign Up</H2> : <H2>Login</H2>}
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        // onSubmit={(values) => {
        //   console.log(values);
        // }}
        onSubmit={async (values) => {
          setLoading(true);
          try {
            if (isSignup) {
              // const success = signup(values);
              const success = await signup({
                username: values.username,
                email: values.email,
                password: values.password,
              });

              if (!success) {
                // alert("User already exists");
                setOpen(true);
                setMessage("User already exists");
                setVariant("error");
                return;
              }

              // alert("Signup successful");
              setOpen(true);
              setMessage("Signup successful");
              setVariant("success");
              navigate("/");
            } else {
              // Login ////////////////////////////////////////////////////////////////////
              // const success = login(values);
              const success = await login({
                username: values.username,
                password: values.password,
              });

              if (!success) {
                // alert("Invalid credentials");
                setOpen(true);
                setMessage("Invalid credentials");
                setVariant("error");
                return;
              }

              // alert("Login successful");
              setOpen(true);
              setMessage("Login successful");
              navigate("/products/shop");
            }
          } finally {
            setLoading(false);
          }
        }}
      >
        <FormStyle>
          {/* {isSignup && (
            <div>
              <Label>Name</Label>
              <FieldStyle name="name" type="text" required />
            </div>
          )} */}

          <div>
            <Label>Username</Label>
            <FieldStyle name="username" type="text" required />
          </div>

          {isSignup && (
            <Input>
              <Label>E-mail</Label>
              <FieldStyle name="email" type="email" required />
            </Input>
          )}
          <Input>
            <Label>Password</Label>
            <FieldStyle
              name="password"
              type={`${show ? "text" : "password"}`}
              required
            />
            <IconButton onClick={() => setShow(!show)}>
              {show ? <FaEyeSlash /> : <FaEye />}
            </IconButton>
          </Input>

          <Button type="submit" disabled={loading}>
            {loading ? (
              <BouncingDots className="w-12 [--duration:2s] text-[#474747]" />
            ) : isSignup ? (
              "Sign Up"
            ) : (
              "Login"
            )}
          </Button>

          {isSignup ? (
            <RoutingLink>
              Have an account already &nbsp;
              <LinkStyled to="/">Login</LinkStyled>
            </RoutingLink>
          ) : (
            <RoutingLink>
              New to ESNTL &nbsp;<LinkStyled to="/signup">Sign Up</LinkStyled>
            </RoutingLink>
          )}
        </FormStyle>
      </Formik>
      <SnackBarAlert
        open={open}
        handleClose={handleClose}
        message={message}
        variant={variant}
      />
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

const Input = styled.div`
  position: relative;
`;

const IconButton = styled.button`
  position: absolute;
  right: 0;
`;
