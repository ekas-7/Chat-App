import { Dialog, styled, Box, Typography } from "@mui/material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

// Inline SVG for the logo (you can replace this with an actual import if needed)
const ChatAppLogo = styled('svg')({
  width: '150px', // Adjust size as needed
  height: '150px',
  fill: '#39ff14', // Neon color
  marginRight: '20px', // Increased spacing between logo and text
});

const StyledDialog = styled(Dialog)`
  && .MuiPaper-root {
    height: 96%;
    margin-top: 10%;
    width: 50%;
    max-width: none; /* Ensure no max-width constraint */
    background-color: transparent; /* Ensure dialog background is not dark */
    border: 2px solid #39ff14; /* Neon border */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0px 0px 10px #39ff14; /* Neon glow effect */
  }
`;

const DialogContent = styled(Box)`
  background-color: #1c1c1c; /* Dark background inside the dialog */
  height: 100%;
  padding: 16px;
  border-radius: 8px; /* Ensure rounded corners */
`;
const NeonGoogleLoginButton = styled(Box)`
  display: inline-block;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0px 0px 4px #39ff14; /* Neon glow effect */
  overflow: hidden; /* Ensure the button fits nicely inside the neon box */
  &:hover {
    box-shadow: 0px 0px 15px #39ff14; /* Enhance neon glow on hover */
  }
`;

const LoginDialog = () => {
  const { setAccount } = useContext(AccountContext);
  const onLoginSuccess = (response) => {
     const dec=jwtDecode(response.credential);
     setAccount(dec);
  };

  const onLoginFailure = (error) => {
    console.log("Login Failure", error);
  };

  return (
    <StyledDialog open={true} hideBackdrop={true}>
      <DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 10,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mb: 2, // Spacing below the heading
            }}
          >
            <ChatAppLogo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 4.686 0 10.464 0 13.368 1.83 15.904 4.595 17.291L3.419 24 8.045 21.261C9.357 21.635 10.658 21.864 12 21.864C18.627 21.864 24 17.178 24 11.4 24 5.622 18.627 0 12 0zM12 20.1C10.958 20.1 9.92 19.944 8.925 19.64L8.409 19.485 5.805 20.926 6.447 18.262 6.149 18.103C3.73 16.784 2.4 14.571 2.4 11.4 2.4 5.958 6.937 2.4 12 2.4 17.063 2.4 21.6 5.958 21.6 11.4 21.6 16.842 17.063 20.4 12 20.4z" />
            </ChatAppLogo>
            <Typography
              variant="h1" // Adjusted for size
              sx={{
                color: "#39FF14",
                fontFamily: "New Amsterdam, sans-serif", // Apply the New Amsterdam font
                textShadow: "0px 0px 10px rgba(57, 255, 20, 0.7)", // Neon text shadow
              }}
            >
              CHAT APP
            </Typography>
          </Box>
          <Typography
            variant="h3" // Adjusted for size
            sx={{
              color: "#39FF14",
              fontFamily: "New Amsterdam, sans-serif", // Apply the New Amsterdam font
              textShadow: "0px 0px 10px rgba(57, 255, 20, 0.7)", // Neon text shadow
              mb: 2, // Add margin-bottom for spacing
            }}
          >
            Login with just one click!
          </Typography>
          <NeonGoogleLoginButton>
            <GoogleLogin
              onSuccess={onLoginSuccess
              }
              onError={onLoginFailure}
            />
          </NeonGoogleLoginButton>
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default LoginDialog;
