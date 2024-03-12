import React, { Component } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  return (
    <div>
      <h1>Main</h1>
      <Link to="/testchat">HOME</Link>
    </div>
  );
};

export default App;
