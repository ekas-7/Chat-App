import React, { useState } from 'react';
import Header from './Header';
import Conversations from './Conversations';
import Search from './Search';

const SideChat = () => {
    const [text, setText] = useState('');

    return (
        <div className="flex flex-col h-full bg-white border-r border-gray-300 text-black">
            <div className="flex-none">
                <Header />
            </div>
            
            <div className="flex-none px-4 py-3">
                <Search setText={setText} />
            </div>
            
            <div className="flex-grow overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-white">
                <Conversations text={text} />
            </div>

            {/* Custom scrollbar styling */}
            <style jsx>{`
                /* Webkit scrollbar styling */
                .scrollbar-thin::-webkit-scrollbar {
                    width: 6px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-track {
                    background: #fff;
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb {
                    background: #ccc;
                    border-radius: 3px;
                }
                
                .scrollbar-thin::-webkit-scrollbar-thumb:hover {
                    background: #bbb;
                }
                
                /* Firefox scrollbar styling */
                .scrollbar-thin {
                    scrollbar-width: thin;
                    scrollbar-color: #ccc #fff;
                }
            `}</style>
        </div>
    );
};

export default SideChat;
