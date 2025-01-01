import React, { useState, useEffect, useContext } from "react";
import { getUser, Convo } from "../../../service/service";
import { AccountContext } from '../../../context/AccountProvider';

const Conversations = ({ text }) => {
    const [conversations, setConversations] = useState([]);
    const { setPerson, account, socket, setActiveUsers } = useContext(AccountContext);

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

    useEffect(() => {
        if (account && socket.current) {
            socket.current.emit('addUser', account);
            socket.current.on("getUsers", users => {
                setActiveUsers(users);
            });
            return () => socket.current.off("getUsers");
        }
    }, [account, socket, setActiveUsers]);

    const handleConversationClick = async (conversation) => {
        setPerson(conversation);
        await Convo({ senderId: account.sub, receiverId: conversation.sub });
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden text-black">
            {conversations.map((conversation) => (
                <div key={conversation.id}>
                    <div
                        className="group p-4 flex items-center space-x-4 cursor-pointer transition-all duration-300 hover:bg-gray-100"
                        onClick={() => handleConversationClick(conversation)}
                    >
                        <div className="relative">
                            <img
                                src={conversation.picture}
                                alt={conversation.name}
                                className="w-12 h-12 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        
                        <div className="flex-grow">
                            <h3 className="text-black font-semibold mb-1 transition-colors duration-300 group-hover:text-blue-500">
                                {conversation.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                Click to start chatting
                            </p>
                        </div>
                        
                        <div className="transform transition-transform duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                            <svg 
                                className="w-5 h-5 text-blue-400"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </div>
                    </div>
                    <div className="h-px bg-gray-300 last:hidden"></div>
                </div>
            ))}
            
            {conversations.length === 0 && (
                <div className="p-8 text-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg 
                            className="w-8 h-8 text-gray-500"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                        >
                            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="text-gray-600 font-medium">No conversations found</h3>
                    <p className="text-gray-500 text-sm mt-2">Try searching with a different term</p>
                </div>
            )}
        </div>
    );
};

export default Conversations;
