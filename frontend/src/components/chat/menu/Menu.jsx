import React from 'react';
import { Typography,Box } from '@mui/material';

//components
import Header from './Header';
import Conversations from './Conversations';

const SideChat = () => {
    return (
        <>
            <Box>
            <Header />
            <Conversations />
            
            </Box>
            
        </>
        
    );
}

export default SideChat;
