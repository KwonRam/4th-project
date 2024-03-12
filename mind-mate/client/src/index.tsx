import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { io } from 'socket.io-client';
import { Socket } from 'socket.io-client';

const socket = io('http://localhost:4000'); // Replace with your server's URL

ReactDOM.render(
  <React.StrictMode>
    <App socket={socket} />
  </React.StrictMode>,
  document.getElementById('root')
);
