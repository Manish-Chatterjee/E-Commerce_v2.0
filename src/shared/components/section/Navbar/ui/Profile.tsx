import styled from "styled-components";

const Profile = () => {
  return (
    <>
      <Img
        src="https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8"
        alt="profile-logo"
      />
    </>
  );
};

export default Profile;

const Img = styled.img`
  height: 40px;
  border-radius: 100px;
  margin-inline: 5px;
`;

// for dropdown menu authentication, show profile picture if logged in else show 2 options for logout and signout

// const { user, logout, isAuthenticated } = useAuth();

// {isAuthenticated ? (
//   <>
//     <span>{user?.email}</span>
//     <button onClick={logout}>Logout</button>
//   </>
// ) : (
//   <>
//     <Link to="/">Login</Link>
//     <Link to="/signup">Signup</Link>
//   </>
// )}
