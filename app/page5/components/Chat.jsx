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
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      {/* Chat History */}
      <Paper 
        sx={{ 
          p: 4, 
          mb: 3, 
          width: '80%', // Adjust width as needed
          height: '60vh',
          borderRadius: '24px', 
          backgroundColor: '#f3e5f5', 
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)',
          overflowY: 'auto',
        }}
      >
        {messages.map((message, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start'}}>
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
      <Box sx={{ display: 'flex', alignItems: 'center', width: '93%' }}>
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
          sx={{ mr: 1,}}
        />
        <IconButton onClick={handleSendMessage}>
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Chat;