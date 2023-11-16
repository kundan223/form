// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Add from './form'; // Import your Add component (assuming it's in the same directory)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Add />} />
      </Routes>
    </Router>
  );
}

export default App;
