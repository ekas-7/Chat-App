import React, { useState, useEffect } from "react";
import { getUser } from "../../../service/service";
import { Box, Typography, Divider } from "@mui/material";

const Conversations = () => {
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUser();
            console.log(response);
            setConversations(response.data);
        };
        fetchData();
    }, []);

    return (
        <Box>
            {conversations.map((conversation, index) => (
                <React.Fragment key={index}>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        padding="10px"
                    >
                        <img
                            src={conversation.picture}
                            alt="dp"
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                marginRight: "15px",
                            }}
                        />
                        <Typography 
                            variant="h6" // Change variant to h6 for larger text
                            style={{ color: "white" }} // Set text color to white
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
