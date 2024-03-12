import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//페이지 임포트
import MainPage from './pages/MainPage';
import TestDB from './pages/TestDB';
import TestChat from './pages/TestChat';
import Error404 from './pages/errors/Error404';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/testdb" element={<TestDB />}></Route>
          <Route path="/testchat" element={<TestChat />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
