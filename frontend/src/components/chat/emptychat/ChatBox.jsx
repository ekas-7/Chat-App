import { Box } from "@mui/material";

const ChatBox = () => {
    return (
        <>
            <Box
                sx={{
                    height: '74%',         // Set height to 75%
                    overflowY: 'scroll',   // Enable vertical scrolling
                    padding: 2,            // Optional: add padding for better appearance
                }}
            >

            </Box>
        </>
    );
};

export default ChatBox;
