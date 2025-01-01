import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AccountContext } from '../../../context/AccountProvider'; // Update the path as necessary

const ChatHeader = () => {
  const { person, activeUsers } = useContext(AccountContext);

  // Check if the current user is online
  const isOnline = activeUsers?.some(user => user.sub === person?.sub);

  return (
    <div className="bg-white pt-14 px-4 ">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
        {/* Profile Section */}
        <div className="flex items-center w-full md:w-auto">
          <div className="relative">
            <img
              className="w-12 h-12 rounded-full border-2 border-blue-500"
              src={person?.picture || "/vite.png"}
              alt={person?.name || "User Name"}
            />
            {isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
            )}
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-gray-900">
              {person?.name || "Strike a Convo !"}
            </h1>
            <span className="text-sm text-gray-500">
              {isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>

        {/* Search Section */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            className="block w-full px-4 py-2 text-sm text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="Search..."
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">
            <SearchIcon />
          </span>
        </div>
      </div>
      <hr className="border-t border-gray-300 mt-4" />
    </div>
  );
};

export default ChatHeader;
