// FloatingContacts.jsx

import React from 'react';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import styled from 'styled-components';

const FloatingWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 1000;

  a {
    width: 48px;
    height: 48px;
    background: #25D366;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    transition: transform 0.2s ease;
  }

  a.email {
    background: #0072C6;
  }

  a:hover {
    transform: translateY(-4px);
  }
`;

const FloatingContacts = () => (
  <FloatingWrapper>
    <a
      href="https://wa.me/917656918304"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp size={24} />
    </a>

    <a
      href="mailto:info.lumenxo@gmail.com"
      className="email"
      aria-label="Send an email"
    >
      <FaEnvelope size={24} />
    </a>
  </FloatingWrapper>
);

export default FloatingContacts;
