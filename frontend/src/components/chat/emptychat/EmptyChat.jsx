import React from 'react';
import { Box } from '@mui/material';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';

const EmptyChat = () => {
    return (
        <Box
            sx={{
                borderLeft: '2px solid #cccccc', // Light gray and thinner border
                padding: 2,
                height: '90vh',
                width: '100%', // Ensure it takes the full width of the container
            }}
        >
            <ChatHeader />
            <ChatBox />
            <ChatFooter />
        </Box>
    );
}

export default EmptyChat;
