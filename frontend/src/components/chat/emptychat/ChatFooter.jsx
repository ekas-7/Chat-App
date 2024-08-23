import React from 'react';
import { Box, Button, TextField } from '@mui/material';

const ChatFooter = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#282c34', // Dark background for neon effect
                padding: 1,
                borderRadius: 2, // Rounded corners
                marginTop: 2,
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Type a message..."
                fullWidth
                sx={{
                    marginRight: 1,
                    input: {
                        color: '#00ffcc', // Neon text color
                    },
                    fieldset: {
                        borderColor: '#00ffcc', // Neon border color
                    },
                    '&:hover fieldset': {
                        borderColor: '#00ffcc', // Neon border color on hover
                    },
                    '&:focus-within fieldset': {
                        borderColor: '#00ffcc', // Neon border color on focus
                        boxShadow: '0 0 10px rgba(0, 255, 255, 1)', // Neon glow on focus
                    },
                }}
            />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#00ffcc', // Neon button color
                    color: '#282c34', // Dark text color for contrast
                    marginRight: 1, // Space between buttons
                    '&:hover': {
                        backgroundColor: '#00e6b3', // Slightly lighter on hover
                        boxShadow: '0 0 30px rgba(0, 255, 255, 0.7)', // Stronger glow on hover
                    },
                    '&:focus': {
                        boxShadow: '0 0 30px rgba(0, 255, 255, 1)', // Strong neon glow on focus
                    },
                }}
            >
                Send
            </Button>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#00ffcc', // Neon button color
                    color: '#282c34', // Dark text color for contrast
                    '&:hover': {
                        backgroundColor: '#00e6b3', // Slightly lighter on hover
                        boxShadow: '0 0 30px rgba(0, 255, 255, 0.7)', // Stronger glow on hover
                    },
                    '&:focus': {
                        boxShadow: '0 0 30px rgba(0, 255, 255, 1)', // Strong neon glow on focus
                    },
                }}
            >
                Attach
            </Button>
        </Box>
    );
};

export default ChatFooter;
