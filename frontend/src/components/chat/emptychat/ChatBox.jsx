import React, { useContext, useEffect, useRef } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBox = ({ messages }) => {
    const { account } = useContext(AccountContext);
    const chatBoxRef = useRef(null);

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { hour: '2-digit', minute: '2-digit' };
        return date.toLocaleString('en-US', options);
    };

    useEffect(() => {
        if (chatBoxRef.current) {
            chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div ref={chatBoxRef} className=" overflow-y-auto px-4 py-6 space-y-4 bg-white">
            {messages && messages.length > 0 ? (
                messages.map((message, index) => {
                    const isSender = account.sub === message.senderId;
                    return (
                        <div key={index} className={`flex ${isSender ? 'justify-end' : 'justify-start'}`}>
                            <div className={`
                                max-w-[60%] rounded-2xl p-3 shadow-sm
                                ${isSender ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-800'}
                                transition-all duration-300 hover:shadow-md
                            `}>
                                {message.text && (
                                    <p className="text-sm break-words">{message.text}</p>
                                )}
                                
                                {message.image && (
                                    <img
                                        src={message.image}
                                        alt="Sent image"
                                        className="max-w-full rounded-lg mt-2 object-cover"
                                    />
                                )}
                                
                                <div className={`
                                    text-xs mt-1 flex items-center justify-end space-x-1
                                    ${isSender ? 'text-blue-600' : 'text-gray-400'}
                                `}>
                                    <span>{formatDate(message.createdAt)}</span>
                                    {isSender && (
                                        <svg 
                                            className="w-4 h-4"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-gray-400">
                    <svg 
                        className="w-16 h-16 mb-4 text-blue-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    <p className="text-sm font-medium text-blue-500">No messages yet</p>
                    <p className="text-xs mt-1 text-gray-500">Start a conversation!</p>
                </div>
            )}
        </div>
    );
};

export default ChatBox;