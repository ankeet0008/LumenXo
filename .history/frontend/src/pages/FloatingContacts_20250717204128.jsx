import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWhatsapp, FaEnvelope, FaComments } from 'react-icons/fa';

// Styled chatbot popup
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

// Shared button styles
const FloatingButton = styled.a`
  width: 55px;
  height: 55px;
  border-radius: 50%;
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

  &:hover {
    transform: translateY(-5px);
  }
`;

const FloatingButtonButton = styled.button`
  ${FloatingButton}
`;

// WhatsApp & Email (left side)
const LeftFloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;
`;

// Chatbot (right side)
const RightFloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

const FloatingContacts = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      {showChatbot && (
        <ChatBotPopup>
          <iframe
            title="Botpress Chatbot"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/07/15/20250707154721-2S14VAGO.json"
            allow="clipboard-write"
          ></iframe>
        </ChatBotPopup>
      )}

      {/* Left side - WhatsApp and Email */}
      <LeftFloatingContainer>
        <FloatingButton
          href="https://alvo.chat/6hdD"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Chat"
          style={{ backgroundColor: '#25D366' }}
        >
          <FaWhatsapp />
        </FloatingButton>
        <FloatingButton
          href="mailto:info.lumenxo@gmail.com"
          aria-label="Send Email"
          style={{ backgroundColor: '#0072C6' }}
        >
          <FaEnvelope />
        </FloatingButton>
      </LeftFloatingContainer>

      {/* Right side - Chatbot */}
      <RightFloatingContainer>
        <FloatingButtonButton
          onClick={() => setShowChatbot(!showChatbot)}
          className="chatbot"
          aria-label="Open Chatbot"
          style={{ backgroundColor: '#6f42c1' }}
        >
          <FaComments />
        </FloatingButtonButton>
      </RightFloatingContainer>
    </>
  );
};

export default FloatingContacts;
