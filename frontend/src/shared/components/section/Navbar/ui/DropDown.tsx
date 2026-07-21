import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../../../../features/auth/hooks/useAuth";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
  const [open, setOpen] = useState(false);

  // Logout✅
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
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
          <button>Profile</button>
          <button onClick={handleLogout}>Log out</button>
          <button>Sign out</button>
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

  button {
    border: none;
    outline: none;
    padding-block: 3px;

    &:hover {
      box-shadow: inset 1px 1px 5px 1px rgb(180, 180, 180);
    }
  }
`;
