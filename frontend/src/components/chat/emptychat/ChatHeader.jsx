import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const ChatHeader = () => {
  return (
    <header>
      <div className="flex justify-between items-center p-0">
        <div className="flex items-center">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src="/static/images/avatar/1.jpg"
              alt="User Name"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-white">User Name</h1>
            <span className="text-sm text-white">Online</span>
          </div>
        </div>
        <div className="relative">
          <input
            type="text"
            className="block w-full px-4 py-2 text-white bg-transparent border border-gray-300 rounded-lg focus:ring-white focus:border-white placeholder-white"
            placeholder="Search..."
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-white">
            <SearchIcon />
          </span>
        </div>
      </div>
      <hr class="border-t border-gray-300 my-4" />
    </header>
  );
};

export default ChatHeader;
