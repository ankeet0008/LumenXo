import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaWhatsapp, FaComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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

  a:hover {
    transform: translateY(-5px);
  }
`;

const FloatingRightContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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

const BookCallButton = styled.button`
  background-color: #F05A28;
  color: white;
  padding: 16px 32px;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 18px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 8px 30px rgba(240, 90, 40, 0.4);
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    background-color: #e04e20;
    transform: scale(1.05);
    box-shadow: 0 12px 40px rgba(240, 90, 40, 0.6);
  }

  &:active {
    transform: scale(0.95);
  }
`;

const Toast = styled.div`
  position: fixed;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #22C55E;
  color: white;
  padding: 16px 32px;
  border-radius: 8px;
  font-weight: 600;
  z-index: 10000;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  animation: slideDown 0.3s ease-out;

  @keyframes slideDown {
    from { top: -50px; opacity: 0; }
    to { top: 40px; opacity: 1; }
  }
`;

const FloatingContacts = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyNumber = () => {
    navigator.clipboard.writeText("+91 8260569773");
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {showToast && (
        <Toast>Phone number copied: +91 8260569773</Toast>
      )}
      
      {showChatbot && (
        <ChatBotPopup>
          <iframe
            title="Botpress Chatbot"
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://cdn.botpress.cloud/webchat/v3.0/shareable.html?configUrl=https://files.bpcontent.cloud/2025/07/07/15/20250707154721-2S14VAGO.json"
            allow="clipboard-write"
          />
        </ChatBotPopup>
      )}

      <FloatingLeftContainer>
        <a href="tel:+917656918304" aria-label="Call Us">
          <FaPhone />
        </a>
        <a
          href="https://www.whatsapp.com/channel/0029VaxwsYuJUM2jam4hDZ12"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Channel"
        >
          <FaWhatsapp />
        </a>
      </FloatingLeftContainer>

      <FloatingRightContainer>
        <BookCallButton onClick={handleCopyNumber}>
          <FaPhone size={18} />
          <span>Book a call</span>
        </BookCallButton>
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="chatbot"
          aria-label="Open Chatbot"
        >
          <FaComments />
        </button>
      </FloatingRightContainer>
    </>
  );
};

export default FloatingContacts;
