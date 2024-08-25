import React, { useEffect, useState, useContext } from 'react';
import { Box } from '@mui/material';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { getConversation } from '../../../service/service';
import { AccountContext } from '../../../context/AccountProvider';
import { newMessage } from '../../../service/service';

const EmptyChat = () => {
    const { account, person } = useContext(AccountContext);
    const [text, setText] = useState(''); // State for text input
    const [conversationId, setConversationId] = useState(null); // State to store conversation ID

    useEffect(() => {
        const getConversationDetails = async () => {
            if (account && person) {
                try {
                    const data = await getConversation({
                        receiverId: person.sub.toString(), // Convert to string and use correct key
                        senderId: account.sub.toString(),   // Convert to string
                    });
                    console.log('Conversation data:', data);
                    setConversationId(data._id);
                } catch (error) {
                    console.error('Error while fetching conversation:', error.message);
                }
            }
        };
        getConversationDetails();
    }, [account, person]);

    const sendMessage = () => {
        if (text.trim() === '') {
            console.log('Cannot send an empty message');
            return; // Prevent sending empty messages
        }

        if (conversationId) {
            const message = {
                senderId: account.sub,
                receiverId: person.sub, // Corrected the spelling from 'reciverId' to 'receiverId'
                conversationId: conversationId,
                text: text,
            };
            console.log(message);
            newMessage(message);
            setText(''); // Clear input field after sending the message
            // Call your API to send the message here
        } else {
            console.log('Cannot send message, conversationId is missing');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent default Enter key behavior (e.g., adding a new line)
            sendMessage(); // Call sendMessage function
        }
    };

    return (
        <Box
            sx={{
                borderLeft: '2px solid #cccccc', // Light gray and thinner border
                padding: 2,
                height: '90vh',
                width: '100%', // Ensure it takes the full width of the container
            }}
        >
            <ChatHeader />
            <ChatBox />
            <ChatFooter text={text} setText={setText} handleKeyDown={handleKeyDown} sendMessage={sendMessage} />
        </Box>
    );
}

export default EmptyChat;
