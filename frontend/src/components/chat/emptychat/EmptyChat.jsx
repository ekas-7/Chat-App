import React, { useEffect, useState, useContext, useRef } from 'react';
import { Box } from '@mui/material';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { getConversation, getMessages, newMessage } from '../../../service/service';
import { AccountContext } from '../../../context/AccountProvider';

const EmptyChat = () => {
    const { account, person, socket } = useContext(AccountContext);
    const [text, setText] = useState('');
    const [conversationId, setConversationId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [flag, setFlag] = useState(false);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);
    const messagesEndRef = useRef(null); // Ref to scroll to the bottom

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now()
            });
        });

        // Cleanup listener on unmount
        return () => {
            socket.current.off('getMessage');
        };
    }, [socket]);

    useEffect(() => {
        const getConversationDetails = async () => {
            if (account && person) {
                try {
                    const data = await getConversation({
                        receiverId: person.sub.toString(),
                        senderId: account.sub.toString(),
                    });
                    setConversationId(data._id);
                } catch (error) {
                    console.error('Error while fetching conversation:', error.message);
                }
            }
        };
        getConversationDetails();
    }, [account, person]);

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
    }, [conversationId, flag]);

    useEffect(() => {
        if (incomingMessage && conversationId) {
            setMessages(prevMessages => [...prevMessages, incomingMessage]);
        }
    }, [incomingMessage, conversationId]);

    useEffect(() => {
        // Scroll to bottom whenever messages change
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async () => {
        if (!conversationId) {
            console.log('Cannot send message, conversationId is missing');
            return;
        }

        try {
            let message;
            if (image) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId,
                    text: text + "\nLINK TO DOWNLOAD\n" + image,
                };
                console.log('Sending message:', message);
                socket.current.emit('sendMessage', message);
                await newMessage(message);
                setFile(null);
                setText('');
                setImage(null);
            } else if (text.trim() !== '') {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId,
                    text,
                };
                console.log('Sending message:', message);
                socket.current.emit('sendMessage', message);
                await newMessage(message);
                setText('');
            } else {
                console.log('Cannot send an empty message');
                return;
            }

            setFlag(!flag);
        } catch (error) {
            console.error('Failed to send message:', error.message);
            alert('Failed to send message, please try again.');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <Box
            sx={{
                borderLeft: '2px solid #cccccc',
                padding: 2,
                height: '90vh',
                width: '100%',
            }}
        >
            <ChatHeader />
            <ChatBox messages={messages} />
            <div ref={messagesEndRef} /> {/* For scrolling to bottom */}
            <ChatFooter
                text={text}
                setText={setText}
                handleKeyDown={handleKeyDown}
                sendMessage={sendMessage}
                file={file}
                setFile={setFile}
                setImage={setImage}
                image={image}
            />
        </Box>
    );
}

export default EmptyChat;
