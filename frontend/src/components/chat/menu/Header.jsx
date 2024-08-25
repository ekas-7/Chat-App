import React, { useContext } from 'react';
import { Typography, Box, Button, styled, Divider } from '@mui/material';
import { AccountContext } from '../../../context/AccountProvider';


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
    const { account, setAccount } = useContext(AccountContext);

    const handleLogout = () => {
        // Call Google API to sign out
        if (window.gapi) {
            const auth2 = window.gapi.auth2.getAuthInstance();
            auth2.signOut().then(() => {
                // Clear user data in context
                setAccount(null); // Clear the account context

                // Clear all items in local storage
                localStorage.clear(); // This will remove all items from local storage

                // Optionally, you can log a message or perform additional cleanup

                // Redirect to the homepage
                navigate('/');
            }).catch(error => {
                console.error("Logout failed: ", error); // Log any errors
            });
        }
    };

    return (
        <>
            <HeaderContainer>
                <Prof>
                    <img src={account.picture} alt="User" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Prof>
                <NeonButton onClick={handleLogout}>Logout</NeonButton>
            </HeaderContainer>
            <Divider />
            
        </>
    );
}

export default Header;
