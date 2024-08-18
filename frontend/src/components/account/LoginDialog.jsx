import { Dialog, styled, Box, Typography } from "@mui/material";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const StyledDialog = styled(Dialog)`
  && .MuiPaper-root {
    height: 96%;
    margin-top: 10%;
    width: 70%;
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

const LoginDialog = () => {
  const onLoginSuccess = (response) => {
    console.log("Login Success", response);
  };

  const onLoginFailure = (error) => {
    console.log("Login Failure", error);
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <StyledDialog open={true}>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 10 }}>
            <Typography
              variant="h1"
              sx={{
                color: "#39FF14",
                fontFamily: "New Amsterdam, sans-serif", // Apply the New Amsterdam font
                textShadow: "0px 0px 10px rgba(57, 255, 20, 0.7)", // Neon text shadow
                mb: 2, // Add margin-bottom for spacing
              }}
            >
              Login with just one click!
            </Typography>
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginFailure}
            />
          </Box>
        </DialogContent>
      </StyledDialog>
    </GoogleOAuthProvider>
  );
};

export default LoginDialog;
