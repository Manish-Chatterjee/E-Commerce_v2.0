import styled from "styled-components";
import Lottie from "lottie-react";
import LoadingLogo from "../../assets/lottie/LoadingLogo.json";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type LoadingProps = {
  onSuccess?: () => void; // optional callback when loading succeeds
};

const Loading = ({ onSuccess }: LoadingProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        // If there is a success callback (like API call succeeded)
        if (onSuccess) {
          onSuccess();
        } else {
          // If nothing happens, redirect to a universal error page
          navigate("/error", {
            state: { message: "Something went wrong", status: 500 },
          });
        }
      } catch (error) {
        // Any unexpected error
        navigate("/error", {
          state: { message: "Unexpected error occurred", status: 500 },
        });
      }
    }, 5000); // universal 5-second timeout

    return () => clearTimeout(timer);
  }, [navigate, onSuccess]);

  return (
    <Div>
      <Lottie animationData={LoadingLogo} loop={true} />
    </Div>
  );
};

export default Loading;

const Div = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
