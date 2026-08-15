import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../../../../features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  // Logout✅
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate("/");
  // };

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  const handleClick = (linkTo: string) => {
    switch (linkTo) {
      case "profile":
        alert(user?.username);
        console.log(user,'user')
        break;
      case "logout":
        logout();
        navigate("/", { replace: true });
        break;
      case "history":
        return console.log("history");
        break;
      case "admin":
        navigate("/api/admin/dashboard");
    }
  };

  return (
    <Container>
      {/* <button onClick={toggleDropdown}> */}
      <Img
        src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
        alt="profile-logo"
        onClick={toggleDropdown}
      />
      {/* </button> */}

      {open && (
        <DropDownContainer>
          <h5>Hey {user?.username}</h5>
          <button onClick={() => handleClick("profile")}>Profile</button>
          {/* <button onClick={handleLogout}>Log out</button> */}
          <button onClick={() => handleClick("logout")}>Log out</button>
          <button onClick={() => handleClick("history")}>History</button>
          {user?.role === "ADMIN" && (
            <button onClick={() => handleClick("admin")}>
              {/* <Link to="/adminDashboard"> */}
              Admin Board
              {/* </Link> */}
            </button>
          )}
        </DropDownContainer>
      )}
    </Container>
  );
};

export default DropDown;

const Container = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`;

const Img = styled.img`
  height: 40px;
  border-radius: 100px;
  margin-inline: 5px;
`;

const DropDownContainer = styled.div`
  position: absolute;
  border: none;
  width: 150px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* border-radius: 10px; */

  h5 {
    background-color: white;
    padding: 2px 0 5px 0;
    margin: 0;
    border-bottom: 1px solid rgb(158, 158, 158);
    text-align: center;
  }

  button {
    border: none;
    outline: none;
    padding-block: 3px;

    &:hover {
      box-shadow: inset 1px 1px 5px 1px rgb(180, 180, 180);
    }
  }
`;
