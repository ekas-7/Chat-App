import React, { useEffect, useState, useContext } from 'react';
import { Box } from '@mui/material';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { getConversation, getMessages } from '../../../service/service';
import { AccountContext } from '../../../context/AccountProvider';
import { newMessage } from '../../../service/service';

const EmptyChat = () => {
    const { account, person } = useContext(AccountContext);
    const [text, setText] = useState(''); // State for text input
    const [conversationId, setConversationId] = useState(null); // State to store conversation ID
    const [messages, setMessages] = useState([]); // State to store messages

    useEffect(() => {
        const getConversationDetails = async () => {
            if (account && person) {
                try {
                    const data = await getConversation({
                        receiverId: person.sub.toString(), // Convert to string and use correct key
                        senderId: account.sub.toString(),   // Convert to string
                    });
                    
                    setConversationId(data._id);
                } catch (error) {
                    console.error('Error while fetching conversation:', error.message);
                }
            }
        };
        getConversationDetails();
    }, [account, person]);

    // New useEffect to fetch messages
    useEffect(() => {
        const getMessagesDetails = async () => {
            if (conversationId) {
                try {
                    console.log('Fetching messages for conversationId:', conversationId);
                    const response = await getMessages(conversationId);
                    setMessages(response);
                } catch (error) {
                    console.error('Error while fetching messages:', error.message);
                }
            }
        };
        getMessagesDetails();
    }, [conversationId]); 

    const sendMessage = async () => {
        if (text.trim() === '') {
            console.log('Cannot send an empty message');
            return; // Prevent sending empty messages
        }

        if (conversationId) {
            const message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId: conversationId,
                text: text,
            };
            console.log(message);
            await newMessage(message); // Await to ensure message is sent before clearing text
            setText(''); // Clear input field after sending the message
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
            <ChatBox messages ={messages}/>
            <ChatFooter text={text} setText={setText} handleKeyDown={handleKeyDown} sendMessage={sendMessage} />
        </Box>
    );
}

export default EmptyChat;
