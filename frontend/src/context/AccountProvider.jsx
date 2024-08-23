import { useState, createContext } from "react";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [person, setPerson] = useState(null); // Add person state

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person, // Include person in the context
            setPerson // Include setPerson in the context
        }}>
            {children}
        </AccountContext.Provider>
    );
}

export default AccountProvider;
