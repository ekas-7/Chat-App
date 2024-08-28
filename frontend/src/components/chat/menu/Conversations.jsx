import React, { useState, useEffect, useContext } from "react";
import { getUser } from "../../../service/service";
import { Box, Typography, Divider } from "@mui/material";
import { AccountContext } from '../../../context/AccountProvider'; 
import { Convo } from "../../../service/service";

const Conversations = ({ text }) => {
    const [conversations, setConversations] = useState([]);
    const { setPerson, account, socket, setActiveUsers } = useContext(AccountContext);

    // Fetch conversations based on the search text
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getUser();
                const filteredData = response.filter(conversation => 
                    conversation.name.toLowerCase().includes(text.toLowerCase())
                );
                setConversations(filteredData);
            } catch (error) {
                console.error("Failed to fetch conversations:", error);
            }
        };

        fetchData();
    }, [text]);

    // Manage socket connection and event listeners
    useEffect(() => {
        if (account && socket.current) {
            console.log("Socket .io initialized for account:", account);
            socket.current.emit('addUser', account); // Emit addUser here
    
            socket.current.on("getUsers", users => {
                console.log("Active users received:", users);
                setActiveUsers(users);
            });
    
            // Cleanup the socket listener on unmount or account change
            return () => {
                socket.current.off("getUsers");
                console.log("Socket listener removed for getUsers");
            };
        } else {
            console.log("Socket or account not available");
        }
    }, [account, socket, setActiveUsers]);

    // Handle conversation click
    const handleConversationClick = async (conversation) => {
        setPerson(conversation); 
        await Convo({ senderId: account.sub, receiverId: conversation.sub });
    };

    return (
        <Box>
            {conversations.map((conversation) => (
                <React.Fragment key={conversation.id}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        padding="10px"
                        onClick={() => handleConversationClick(conversation)}
                        style={{ cursor: 'pointer' }}
                        sx={{
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.1)", // Subtle hover effect
                            },
                            transition: "background-color 0.3s ease",
                        }}
                    >
                        <img
                            src={conversation.picture}
                            alt="Profile"
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                marginRight: "15px",
                            }}
                        />
                        <Typography 
                            variant="h6"
                            style={{ color: "white" }}
                        >
                            {conversation.name}
                        </Typography>
                    </Box>
                    <Divider style={{ backgroundColor: "grey" }} />
                </React.Fragment>
            ))}
        </Box>
    );
};

export default Conversations;
