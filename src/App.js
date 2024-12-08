import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import NameSearchPage from './Components/NameSearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/names/:gender" element={<NameSearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
