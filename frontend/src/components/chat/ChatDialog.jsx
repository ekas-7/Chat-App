import React, { useState } from 'react';
import SideChat from "./menu/Menu";
import EmptyChat from "./emptychat/EmptyChat";

const ChatDialog = () => {
  const [sidebarWidth, setSidebarWidth] = useState(33);

  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const startWidth = sidebarWidth;

    const handleMouseMove = (e) => {
      const newWidth = Math.max(20, Math.min(60, startWidth + ((e.clientX - startX) / window.innerWidth) * 100));
      setSidebarWidth(newWidth);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-full h-full animate-glow">
        <div className="w-full h-full bg-blue-100 text-black p-4 relative">
          
          <div className="flex h-full gap-4 animate-fadeIn relative z-10">
            {/* Sidebar - adjustable width */}
            <div
              className="bg-blue-100 text-black rounded-3xl backdrop-blur-sm overflow-hidden transition-transform duration-300"
              style={{ width: `${sidebarWidth}%` }}
            >
              <SideChat />
            </div>

            {/* Improved Resizable Handle */}
            <div
              onMouseDown={handleMouseDown}
              className="w-2 cursor-ew-resize bg-gray-300 h-[40%] hover:h-[60%] active:bg-gray-400 self-center 
                        rounded-full transition-all duration-300 ease-in-out flex items-center justify-center group"
            >
              <div className="w-0.5 h-8 bg-gray-400 group-hover:bg-gray-600 rounded-full transition-colors duration-150 ease-in-out"></div>
            </div>

            {/* Main Chat - adjustable width */}
            <div
              className="bg-blue-100 text-black rounded-3xl backdrop-blur-sm overflow-hidden transition-transform duration-300"
              style={{ width: `${100 - sidebarWidth}%` }}
            >
              <EmptyChat />
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 30px rgba(52, 211, 153, 0.6);
            border-color: rgba(52, 211, 153, 0.8);
          }
          50% {
            box-shadow: 0 0 50px rgba(52, 211, 153, 0.8);
            border-color: rgba(52, 211, 153, 1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatDialog;
