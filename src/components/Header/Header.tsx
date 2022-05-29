import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Header = () => {
  const cart = useSelector((state: RootState) => state.cartItems.items);
  const itemsToBuy = cart.filter((item) => item.inCart === true);
  const goods = itemsToBuy.length;

  return (
    <div className="header">
      <div
        className="logo"
      >
        <NavLink
          to="/"
        >
          <img
            src="/images/logo.png"
            alt="Logo"
            width={150}
          />
        </NavLink>
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
        {itemsToBuy.length !== 0 && <div className="goods">{goods}</div>}
      </nav>
    </div>
  );
};

export default Header;
