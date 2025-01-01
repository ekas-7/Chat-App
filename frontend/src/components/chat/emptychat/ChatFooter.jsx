import React, { useEffect, useRef } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { uploadFile } from '../../../service/service';

const ChatFooter = ({ text, setText, handleKeyDown, sendMessage, file, setFile, image, setImage }) => {
    const fileInputRef = useRef(null);

    const handleAttachClick = () => {
        if (fileInputRef.current) {
            console.log('Attach button clicked, triggering file input...');
            fileInputRef.current.click();
        } else {
            console.log('File input ref is not defined.');
        }
    };

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();

                data.append('file', file);
                data.append('filename', file.name);
                console.log('Uploading file:', data);

                try {
                    const response = await uploadFile(data);
                    const fileUrl = `http://localhost:3000/api/getUsers/file/${response.fileId}`;
                    console.log('File uploaded:', fileUrl);
                    setImage(fileUrl);
                } catch (error) {
                    console.error('Error uploading file:', error.message);
                } finally {
                    setFile(null); // Reset file to prevent re-uploading
                }
            }
        };
        getImage();
    }, [file, setFile, setImage]);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            console.log('File selected:', selectedFile);
            setFile(selectedFile);
            setText(selectedFile.name);
        } else {
            console.log('No file selected.');
        }
    };

    return (
        <div className="flex items-center p-2 bg-white border-t border-gray-200">
            <input
                type="text"
                className="flex-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Type a message..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button
                className="ml-2 bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={sendMessage}
            >
                Send
            </Button>
            <Button
                className="ml-2 bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                onClick={handleAttachClick}
            >
                Attach
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};

export default ChatFooter;
