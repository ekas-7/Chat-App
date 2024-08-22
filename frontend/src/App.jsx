import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

export default function App() {
  return (
    <GoogleOAuthProvider clientId="833745265217-mpbmvfldhgrdgepf3pa7a6ahjk54qev2.apps.googleusercontent.com">
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}
