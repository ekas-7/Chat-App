import React from 'react';
import { Search as SearchIcon } from 'lucide-react';

const Search = ({ setText }) => {
    return (
        <div className="relative group">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <SearchIcon 
                    className="h-5 w-5 text-gray-600 transition-colors duration-300 group-focus-within:text-blue-500"
                />
            </div>
            
            <input
                type="text"
                placeholder="Search conversations..."
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-white text-gray-900 placeholder-gray-500 
                          pl-10 pr-4 py-2.5 rounded-lg
                          border border-gray-300
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          transition-all duration-300"
            />
            
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 
                          transition-opacity duration-300 pointer-events-none
                          bg-gradient-to-r from-blue-300/10 via-purple-300/10 to-blue-300/10 
                          blur-sm">
            </div>
        </div>
    );
};

export default Search;
