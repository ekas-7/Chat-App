import { useState, createContext, useRef, useEffect } from "react";
import { io } from "socket.io-client";

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {
    const [account, setAccount] = useState(null);
    const [person, setPerson] = useState(null);
    const [activeUsers, setActiveUsers] = useState([]);

    const socket = useRef();

    useEffect(() => {
        // Initialize socket connection
        socket.current = io("http://localhost:8080");

        // Cleanup function to disconnect socket on unmount
        return () => {
            socket.current.disconnect();
        };
    }, []);

    return (
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers
        }}>
            {children}
        </AccountContext.Provider>
    );
};

export default AccountProvider;
