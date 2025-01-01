import React, { useEffect, useState, useContext, useRef } from 'react';
import ChatBox from './ChatBox';
import ChatHeader from './ChatHeader';
import ChatFooter from './ChatFooter';
import { getConversation, getMessages, newMessage } from '../../../service/service';
import { AccountContext } from '../../../context/AccountProvider';

const ChatContainer = () => {
    const { account, person, socket } = useContext(AccountContext);
    const [text, setText] = useState('');
    const [conversationId, setConversationId] = useState(null);
    const [messages, setMessages] = useState([]);
    const [flag, setFlag] = useState(false);
    const [file, setFile] = useState(null);
    const [image, setImage] = useState('');
    const [incomingMessage, setIncomingMessage] = useState(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        const handleIncomingMessage = (data) => {
            setIncomingMessage({ ...data, createdAt: Date.now() });
        };

        socket.current.on('getMessage', handleIncomingMessage);
        return () => socket.current.off('getMessage', handleIncomingMessage);
    }, [socket]);

    useEffect(() => {
        const fetchConversationDetails = async () => {
            if (account && person) {
                try {
                    const data = await getConversation({
                        receiverId: person.sub.toString(),
                        senderId: account.sub.toString(),
                    });
                    setConversationId(data._id);
                } catch (error) {
                    console.error('Error fetching conversation:', error.message);
                }
            }
        };
        fetchConversationDetails();
    }, [account, person]);

    useEffect(() => {
        const fetchMessages = async () => {
            if (conversationId) {
                try {
                    const response = await getMessages(conversationId);
                    setMessages(response);
                } catch (error) {
                    console.error('Error fetching messages:', error.message);
                }
            }
        };
        fetchMessages();
    }, [conversationId, flag]);

    useEffect(() => {
        if (incomingMessage && conversationId) {
            setMessages((prev) => [...prev, incomingMessage]);
        }
    }, [incomingMessage, conversationId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const sendMessage = async () => {
        if (!conversationId) {
            console.warn('Cannot send message, conversationId is missing');
            return;
        }

        try {
            let message = {
                senderId: account.sub,
                receiverId: person.sub,
                conversationId,
                text,
            };

            if (image) {
                message.text += `\nLINK TO DOWNLOAD\n${image}`;
                setFile(null);
                setImage(null);
            } else if (!text.trim()) {
                console.warn('Cannot send an empty message');
                return;
            }

            socket.current.emit('sendMessage', message);
            await newMessage(message);
            setText('');
            setFlag((prev) => !prev);
        } catch (error) {
            console.error('Failed to send message:', error.message);
            alert('Failed to send message. Please try again.');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50 border-l border-gray-200 shadow-lg rounded-lg">
            <div className="flex-none">
                <ChatHeader />
            </div>
            
            {/* Scrollable chat box */}
            <div className="flex-grow overflow-y-auto bg-white p-4 rounded-lg shadow-sm">
                <ChatBox messages={messages} />
                <div ref={messagesEndRef} className="h-4" />
            </div>
            
            <div className="flex-none p-4">
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
            </div>

            {/* Custom scrollbar styles */}
            <style jsx>{`
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: transparent;
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: #3b82f6;
                    border-radius: 4px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: #2563eb;
                }

                .scrollbar-thin {
                    scrollbar-width: thin;
                    scrollbar-color: #3b82f6 transparent;
                }
            `}</style>
        </div>
    );
};

export default ChatContainer;
