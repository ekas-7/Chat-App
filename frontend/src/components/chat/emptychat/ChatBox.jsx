import { Box } from "@mui/material";

const ChatBox = () => {
    return (
        <>
            <Box
                sx={{
                    height: '80%',         // Set height to 75%
                    // backgroundColor: '#f0f0f0', 
                    overflowY: 'scroll',   // Enable vertical scrolling
                    padding: 2,            // Optional: add padding for better appearance
                }}
            >
                {/* Your chat content goes here */}
            </Box>
        </>
    );
};

export default ChatBox;
