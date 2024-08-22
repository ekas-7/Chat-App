import { Dialog, styled, Box, Typography } from "@mui/material";

// Components
import SideChat from "./menu/Menu";
import EmptyChat from "./emptychat/EmptyChat";

const StyledDialog = styled(Dialog)`
  && .MuiPaper-root {
    height: 96%;
    margin-top: 2%;
    width: 96%;
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
  display: flex; /* Flexbox layout to place components side by side */
`;

const NeonText = styled(Typography)`
  color: #39ff14;
  font-family: "New Amsterdam, sans-serif"; /* Apply the New Amsterdam font */
  text-shadow: 0px 0px 10px rgba(57, 255, 20, 0.7); /* Neon text shadow */
`;

const ChatDialog = () => {
  return (
    <StyledDialog open={true} hideBackdrop={true}>
      <DialogContent>
        <Box flex={1} mr={2}> {/* SideChat will take 1 part of the space */}
          <SideChat />
        </Box>
        <Box flex={2}> {/* EmptyChat will take 2 parts of the space */}
          <EmptyChat />
        </Box>
      </DialogContent>
    </StyledDialog>
  );
};

export default ChatDialog;
