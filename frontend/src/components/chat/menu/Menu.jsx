import React from 'react';
import { Typography,Box } from '@mui/material';
import { useState } from 'react';

//components
import Header from './Header';
import Conversations from './Conversations';
import Search from './Search';


const SideChat = () => {

    const [text , setText ]= useState('');
    

    return (
        <>
            <Box>
            <Header />
            <Search setText={setText} />
            <Conversations text ={text} />
            
            </Box>
            
        </>
        
    );
}

export default SideChat;
