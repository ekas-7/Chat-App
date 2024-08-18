import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";

const Header = styled(AppBar)`
  height: 200px;
  background-color: #004d00; /* Dark green background */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 3px 4px #004d00; /* Dark green shadow */
`;

const Container = styled(Box)`
  background-color: #1c1c1c; /* Dark gray */
  padding-top: 200px; /* Offset to push content below the fixed header */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Messenger = () => {
  return (
    <>
      <Container>
        <Header position="static">
          <Toolbar>{/* Add your toolbar content here */}</Toolbar>
        </Header>
        <LoginDialog />
      </Container>
    </>
  );
};

export default Messenger;
