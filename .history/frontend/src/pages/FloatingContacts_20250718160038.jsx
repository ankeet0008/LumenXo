import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

// Chatbot popup container
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

// Left container: Call & Email buttons
const FloatingLeftContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;

  a {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #25D366; /* WhatsApp Green */
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
    background-color: #0072C6; /* Outlook Blue */
  }

  a:hover {
    transform: translateY(-5px);
  }
`;

// Right container: Chatbot button
const FloatingRightContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  z-index: 1000;

  button.chatbot {
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #6f42c1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    border: none;
    cursor: pointer;
    font-size: 24px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
  }

  button.chatbot:hover {
    transform: translateY(-5px);
  }
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
            style={{ border: 0 }}
            allow="clipboard-write"
            allowFullScreen
            src="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/07/15/20250707154721-2S14VAGO.json"
          />
        </ChatBotPopup>
      )}

      {/* Call and Email buttons */}
      <FloatingLeftContainer>
        <a
          href="tel:+917656918304"
          aria-label="Call Us"
          rel="noopener noreferrer"
        >
          <FaPhone />
        </a>
        <a
          href="mailto:info.lumenxo@gmail.com"
          className="email"
          aria-label="Send Email"
          rel="noopener noreferrer"
        >
          <FaEnvelope />
        </a>
      </FloatingLeftContainer>

      {/* Chatbot toggle button */}
      <FloatingRightContainer>
        <button
          type="button"
          onClick={() => setShowChatbot(prev => !prev)}
          className="chatbot"
          aria-label="Toggle Chatbot"
        >
          <FaComments />
        </button>
      </FloatingRightContainer>
    </>
  );
};

export default FloatingContacts;