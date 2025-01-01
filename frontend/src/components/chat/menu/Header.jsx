import React, { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';

const Header = () => {
    const { account, setAccount } = useContext(AccountContext);

    const handleLogout = () => {
        // Reset the account state
        setAccount(null);

        // If you are using a parent component to manage routing, the UI can automatically react to this change and redirect
        // Otherwise, you can manually handle redirection using something like window.location
        window.location.href = '/';  // Redirects to the home page
    };

    return (
        <div className="flex items-center bg-white p-4 rounded-lg w-full">
            <div className="h-11 w-11 rounded-full overflow-hidden bg-white border-2 border-gray-200">
                <img src={account.picture} alt="User" className="w-full h-full object-cover" />
            </div>
            <p className="flex-grow font-semibold text-gray-800 ml-4">
                {account.name}
            </p>
            <button 
                onClick={handleLogout} 
                className="ml-auto px-4 py-2 border-2 border-blue-500 text-blue-500 rounded-full font-medium hover:bg-blue-500 hover:text-white transition-colors duration-300"
            >
                Logout
            </button>
        </div>
    );
};

export default Header;
