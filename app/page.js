'use client';

import { ChatBox } from "@/components/chatbox";
import { ChatBoxV2 } from "@/components/chatboxV2";
import { ChatBoxV3 } from "@/components/chatboxV3";
import {
  Box,
  Stack,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import MedicalIcon from "@mui/icons-material/MedicalServices";

export default function Home(){
  const [selectedChatbot, setSelectedChatbot] = useState('Open AI'); // Default to 'OpenAI'

  const handleChange = (event) => {
    setSelectedChatbot(event.target.value);
  };

  const renderChatbot = () => {
    switch (selectedChatbot) {
      case 'Open AI':
        return <ChatBox />;
      case 'AWS Bedrock':
        return <ChatBoxV2 />;
      case 'AWS + RAG':
        return <ChatBoxV3 />;
      default:
        return <ChatBox />;
    }
  };

  return (
      
      <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "#E0F7FA", // Light blue background
        padding: "2%",
      }}
    >
      
      <Stack direction="row" spacing={2} alignItems="center" mb={3} justifyContent="center" sx={{width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' },
    backgroundColor: 'rgba(255, 255, 255, 0.4)', // White with 10% opacity
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '12px', // Rounded corners
    padding: '16px', // Padding inside the box
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    border: '1px solid rgba(255, 255, 255, 0.2)', // Light border for definition
    }}>

      
      <FormControl>
      <Select onChange={handleChange} value={selectedChatbot}>
        <MenuItem value="Open AI">Open AI</MenuItem>
        <MenuItem value="AWS Bedrock">AWS Bedrock</MenuItem>
        <MenuItem value="AWS + RAG">AWS + RAG</MenuItem>
      </Select>
      </FormControl>
        <MedicalIcon sx={{ fontSize: 40, color: "#FF4C4C" }} />
        <Typography
          variant="h4"
          fontWeight="600"
          sx={{
            color: "#FF4C4C", // Bright red for headings
            fontFamily: "Arial, sans-serif", // Changed font for heading
          }}
        >
          First Aid Chatbot
        </Typography>
      </Stack>
        {renderChatbot()}
      </Box>
  );
}