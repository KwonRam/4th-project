import React, { useEffect, useState } from 'react';
import axios from 'axios';
import io from 'socket.io-client';

const TestChat = () => {
  const socket = io('http://localhost:4000');
  return (
    <div>
      <h1>내 채팅방</h1>
      <div className="chat-container" id="chat-container"></div>
      <div className="input-container">
        <input type="text" id="input-message" placeholder="메세지 작성"></input>
        <button id="send-message">채팅</button>
      </div>
    </div>
  );
};

export default TestChat;
