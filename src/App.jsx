import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/pages/HomeScreen';
import Computers from './components/pages/Computers';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/computers" element={<Computers />} />
      </Routes>
    </Router>
  );
};

export default App;
