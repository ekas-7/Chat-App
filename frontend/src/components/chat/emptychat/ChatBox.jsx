import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBox = ({ messages }) => {
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const options = { hour: '2-digit', minute: '2-digit' };
        return date.toLocaleString('en-US', options);
    };

    const { account } = useContext(AccountContext);

    return (
        <Box
            sx={{
                height: '74%',
                overflowY: 'auto',
                padding: 2,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {messages && messages.length > 0 ? (
                messages.map((message, index) => {
                    const isSender = account.sub === message.senderId;
                    return (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                justifyContent: isSender ? 'flex-end' : 'flex-start',
                                mb: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: '60%',
                                    backgroundColor: isSender ? '#dcf8c6' : '#fff',
                                    borderRadius: '10px',
                                    padding: '8px 12px',
                                    boxShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <Typography variant="body1" sx={{ color: '#303030', wordBreak: 'break-word' }}>
                                    {message.text}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        color: 'rgba(0, 0, 0, 0.45)',
                                        fontSize: '0.75rem',
                                        mt: 0.5,
                                        display: 'block',
                                        textAlign: 'right',
                                    }}
                                >
                                    {formatDate(message.createdAt)}
                                </Typography>
                            </Box>
                        </Box>
                    );
                })
            ) : (
                <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center', mt: 2 }}>
                    No messages yet.
                </Typography>
            )}
        </Box>
    );
};

export default ChatBox;