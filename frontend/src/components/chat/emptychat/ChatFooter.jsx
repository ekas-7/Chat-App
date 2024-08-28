import React, { useEffect, useRef } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { uploadFile ,getFile } from '../../../service/service';

const ChatFooter = ({ text, setText, handleKeyDown, sendMessage, file, setFile ,image , setImage}) => {
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
                console.log(data);

                try {
                    const response=await uploadFile(data);
                    
                    console.log(`http://localhost:3000/api/getUsers/file/${response.fileId}`);
                    setImage(`http://localhost:3000/api/getUsers/file/${response.fileId}`);
                } catch (error) {
                    console.error('Error uploading file:', error.message);
                } finally {
                    setFile(null); // Reset file to prevent re-uploading
                }
            }
        };
        getImage();
    }, [file, setFile]);

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
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#282c34', // Dark background for neon effect
                padding: 1,
                borderRadius: 2, // Rounded corners
                marginTop: 2,
            }}
        >
            <TextField
                variant="outlined"
                placeholder="Type a message..."
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={handleKeyDown} // Use handleKeyDown to capture Enter key
                sx={{
                    marginRight: 1,
                    input: {
                        color: '#00ffcc', // Neon text color
                    },
                    fieldset: {
                        borderColor: '#00ffcc', // Neon border color
                    },
                    '&:hover fieldset': {
                        borderColor: '#00ffcc', // Neon border color on hover
                    },
                    '&:focus-within fieldset': {
                        borderColor: '#00ffcc', // Neon border color on focus
                        boxShadow: '0 0 10px rgba(0, 255, 255, 1)', // Neon glow on focus
                    },
                }}
            />
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#00ffcc', // Neon button color
                    color: '#282c34', // Dark text color for contrast
                    marginRight: 1, // Space between buttons
                    '&:hover': {
                        backgroundColor: '#00e6b3', // Slightly lighter on hover
                        boxShadow: '0 0 30px rgba(0, 255, 255, 0.7)', // Stronger glow on hover
                    },
                    '&:focus': {
                        boxShadow: '0 0 30px rgba(0, 255, 255, 1)', // Strong neon glow on focus
                    },
                }}
                onClick={sendMessage} // Use the sendMessage function
            >
                Send
            </Button>
            <Button
                variant="contained"
                sx={{
                    backgroundColor: '#00ffcc', // Neon button color
                    color: '#282c34', // Dark text color for contrast
                    '&:hover': {
                        backgroundColor: '#00e6b3', // Slightly lighter on hover
                        boxShadow: '0 0 30px rgba(0, 255, 255, 0.7)', // Stronger glow on hover
                    },
                    '&:focus': {
                        boxShadow: '0 0 30px rgba(0, 255, 255, 1)', // Strong neon glow on focus
                    },
                }}
                onClick={handleAttachClick} // Trigger file input click
            >
                Attach
            </Button>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the file input element
                onChange={handleFileChange} // Handle file selection
            />
        </Box>
    );
};

export default ChatFooter;
