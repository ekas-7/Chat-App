import React from 'react';
import { Typography, Box, InputBase } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const Search = () => {
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
            />
        </Box>
    );
}

export default Search;
