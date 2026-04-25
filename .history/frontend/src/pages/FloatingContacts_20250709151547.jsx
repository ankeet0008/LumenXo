import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaEnvelope, FaComments } from 'react-icons/fa';

// Chatbot popup (example placeholder)
const ChatBotPopup = styled.div`
  position: fixed;
  bottom: 90px;
  right: 20px;
  width: 300px;
  height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  overflow: hidden;
`;

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;

  a, button {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #25D366;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
    font-size: 24px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  }

  a.email {
    background-color: #0072C6;
  }

  button.chatbot {
    background-color: #6f42c1;
  }

  a:hover, button:hover {
    transform: translateY(-5px);
  }
`;

const FloatingContacts = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      {showChatbot && (
        <ChatBotPopup>
          {/* Replace this iframe with your chatbot code (see below) */}
          <iframe
            title="Chatbot"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.chatbase.co/chatbot-iframe/YOUR-CHATBOT-ID"
            allow="clipboard-write"
          ></iframe>
        </ChatBotPopup>
      )}

      <FloatingContainer>
        <a
          href="https://alvo.chat/6hdD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:info.lumenxo@gmail.com"
          className="email"
          aria-label="Send Email"
        >
          <FaEnvelope />
        </a>
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="chatbot"
          aria-label="Open Chatbot"
        >
          <FaComments />
        </button>
      </FloatingContainer>
    </>
  );
};

export default FloatingContacts;
