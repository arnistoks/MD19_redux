import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router, NavLink, Route, Routes,
} from 'react-router-dom';
import Logo from './data/images/logo.png';
import HomePage from './pages/HomePage/HomePage';
import CartPage from './pages/CartPage/CartPage';

const App = () => (
  <div className="App">
    <Router>
      <header className="header">
        <div className="logo">
          <img src={Logo} alt="Logo" width="150" />
        </div>
        <nav className="navigation">
          <NavLink
            to="/"
            className="link"
          >
            Home
          </NavLink>
          <NavLink
            to="/cart"
            className="link"
          >
            Cart
          </NavLink>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <footer className="footer">
        <nav className="navigation navigation__footer">
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/cart" className="link">Cart</NavLink>
        </nav>
        <span className="made">Made by me</span>
      </footer>
    </Router>
  </div>
);

export default App;
