import React from 'react';
import ReactDOM from 'react-dom/client';
import { io } from 'socket.io-client';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import init from './init.jsx';

const startChat = async () => {
  const socket = io();
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const vdom = await init(socket);

  root.render(<>{vdom}</>);
};

startChat();
