import React from 'react';
import { Typography,Box } from '@mui/material';

//components
import Header from './Header';

const SideChat = () => {
    return (
        <>
            <Box>
            <Header />
            <Typography sx={{ color: 'white' }}>
                Hello from SideChat
            </Typography>
            
            </Box>
            
        </>
        
    );
}

export default SideChat;
