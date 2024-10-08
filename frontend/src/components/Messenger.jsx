import { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";

const Header = styled(AppBar)`
  height: 200px;
  background-color: #4A4A4A; 
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0px 0px 3px 4px #4A4A4A; /* Dark green shadow */
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

  const  { account } = useContext(AccountContext);
  return (
    account ?
    <>
    <Container>
       
        <Header position="static">
          <Toolbar>{/* Add your toolbar content here */}</Toolbar>
        </Header>
        <ChatDialog/>
      </Container>
    </> 
    :

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
