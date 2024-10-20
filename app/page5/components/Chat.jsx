import React, { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  TextField,
  IconButton,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, inputMessage]);
      setInputMessage('');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'white' }}>
      {/* Chat History */}
      <Paper 
        sx={{ 
          p: 2, 
          mb: 2, 
          height: '80vh',
          borderRadius: '24px', 
          backgroundColor: '#f3e5f5', 
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
        }}
      >
        {messages.map((message, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 'bold', mr: 1, fontFamily: 'Arial, sans-serif', color: '#4a148c' }}>
              LeBron
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Arial, sans-serif', color: '#4a148c' }}>
              {message}
            </Typography>
          </Box>
        ))}
      </Paper>

      {/* Input Area */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 'auto' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="u wanna talk to your buddy?..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          sx={{ mr: 1 }}
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Chat;