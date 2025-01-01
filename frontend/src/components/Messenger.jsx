import { useContext } from "react";
import LoginDialog from "./account/LoginDialog";
import ChatDialog from "./chat/ChatDialog";
import { AccountContext } from "../context/AccountProvider";



const Messenger = () => {

  const  { account } = useContext(AccountContext);
  return (
    account ?
    <>  
        <ChatDialog/>
     
    </> 
    :

    <>
      
        <LoginDialog />
    
    </>
  );
};

export default Messenger;
