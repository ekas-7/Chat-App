import React from 'react';
import { Typography, Box, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useState } from 'react';

const Search = ({setText}) => {

    
    return (
        <Box 
            sx={{ 
                backgroundColor: 'lightgrey', 
                padding: '2px', 
                borderRadius: '4px', 
                marginTop: '8px', 
                display: 'flex', 
                alignItems: 'center' 
            }}
        >
            <SearchIcon sx={{ marginLeft: '8px' }} />
            <InputBase 
                placeholder="Search..." 
                sx={{ 
                    ml: 1, 
                    flex: 1, 
                    padding: '4px' 
                }} 
                onChange={(e) => setText(e.target.value)}
            />
        </Box>
    );
}

export default Search;
