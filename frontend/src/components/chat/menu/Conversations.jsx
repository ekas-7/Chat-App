import React, { useState, useEffect, useContext } from "react";
import { getUser } from "../../../service/service";
import { Box, Typography, Divider } from "@mui/material";
import { AccountContext } from '../../../context/AccountProvider'; 
import { Convo } from "../../../service/service";

const Conversations = ({ text }) => {
    const [conversations, setConversations] = useState([]);
    const { setPerson, account } = useContext(AccountContext); // Get setPerson from context

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

    // Handle conversation click to set the person
    const handleConversationClick = async (conversation) => {
        setPerson(conversation); 
        await Convo({ senderId: account.sub, receiverId: conversation.sub });
    };

    return (
        <Box>
            {conversations.map((conversation) => (
                <React.Fragment key={conversation.id}> {/* Ensure unique key here */}
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        padding="10px"
                        onClick={() => handleConversationClick(conversation)} // Set person on click
                        style={{ cursor: 'pointer' }} // Add pointer cursor for better UX
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
                            variant="h6" // Change variant to h6 for larger text
                            style={{ color: "white" }} // Neon effect
                        >
                            {conversation.name}
                        </Typography>
                    </Box>
                    <Divider style={{ backgroundColor: "grey" }} /> {/* Set divider color to grey */}
                </React.Fragment>
            ))}
        </Box>
    );
};

export default Conversations;
