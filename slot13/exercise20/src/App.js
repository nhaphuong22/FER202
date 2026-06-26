import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { renderRoutes } from './routes';
import NavigationMenu from './NavigationMenu';

function App() {
  return (
    <Router>
      <div>
        <NavigationMenu />
        <Routes>
          {renderRoutes()}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
