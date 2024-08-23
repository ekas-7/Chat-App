import React, { useContext } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { AccountContext} from '../../../context/AccountProvider' // Update the path as necessary

const ChatHeader = () => {
  const { person } = useContext(AccountContext); // Get person from context

  return (
    <header>
      <div className="flex justify-between items-center p-0">
        <div className="flex items-center">
          <div className="relative">
            <img
              className="w-10 h-10 rounded-full"
              src={person?.picture || "/static/images/avatar/1.jpg"} // Use person picture
              alt={person?.name || "User Name"} // Use person name
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-semibold text-white">{person?.name || "User Name"}</h1> {/* Use person name */}
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
      <hr className="border-t border-gray-300 my-4" />
    </header>
  );
};

export default ChatHeader;
