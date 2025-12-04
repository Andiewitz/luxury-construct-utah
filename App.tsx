import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { NotFound } from './components/NotFound';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;