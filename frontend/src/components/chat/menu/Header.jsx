import React, { useContext } from 'react';
import { Typography, Box, Button, styled ,Divider} from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';
import Search from './Search';

const Prof = styled(Box)`
    height: 44px;
    width: 44px;
    border-radius: 50%;
    overflow: hidden; /* to ensure the image fits within the circle */
    background-color: #121212;
   
`;

const HeaderContainer = styled(Box)`
    display: flex;
    align-items: center; /* vertically align the items */

`;


const NeonButton = styled(Button)`
    color: #39ff14; /* Text color for the button */
    border: 2px solid #39ff14; /* Neon border */
    border-radius: 20px; /* Rounded corners */
    padding: 4px 8px; /* Padding around the button */
    margin-left: auto; /* Push the button to the right */
    transition: all 0.3s ease; /* Smooth transition for hover effect */
    box-shadow: 
            0 0 2px #39ff14, 
            0 0 2px #39ff14, 
            0 0 2px #39ff14, 
            0 0 2px #39ff14;
    &:hover {
        background: #39ff14; /* Change background color on hover */
        color: black; /* Change text color on hover */
        box-shadow: 
            0 0 5px #39ff14, 
            0 0 10px #39ff14, 
            0 0 15px #39ff14, 
            0 0 20px #39ff14; /* Add glowing effect on hover */
    }
`;

const Header = () => {
    const { account} = useContext(AccountContext); // Assuming you have a logout function in your context

    const handleLogout = () => {
        // Call the logout function from the context
        
        console.log("User logged out");
    };

    return (
        <>
            <HeaderContainer>
                <Prof>
                    <img src={account.picture} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Prof>
                <NeonButton onClick={handleLogout}>Logout</NeonButton>
            </HeaderContainer>
            <Divider/>
            <Search />
        </>
    );
}

export default Header;
