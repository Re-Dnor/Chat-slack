import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home.jsx';
import Login from './Login.jsx';
import NotFoundPage from './NotFoundPage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
