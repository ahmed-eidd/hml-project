import { Input } from 'antd';
import React from 'react';
import Cart from '../Cart/Cart';
import Link from '../Link/Link';
import Location from '../Location/Location';
import Logo from '../Logo/Logo';
import SearchBar from '../SearchBar/SearchBar';
import classes from './Nav.module.scss';
import NavLang from './NavLang/NavLang';
import NavMenu from './NavMenu/NavMenu';

const { Search } = Input;

const Nav = () => {
  return (
    <div className={classes.Nav}>
      <Logo />
      <div className={classes.Nav__Links}>
        <Link>CATEGORIES</Link>
        <Link>Deals</Link>
        <Link>Recipes</Link>
        <Link>About</Link>
      </div>
      <SearchBar className={classes.Nav__SearchBar} />
      <div className={classes.Nav__Second}>
        <Location
          className={classes.Nav__Location}
          location='34 Plaza Mall, Sheik Zaid'
        />
        <Cart number='1' />
        <NavMenu className={classes.Nav__Menu} name='Mostafa' points='560' />
        <NavLang className={classes.Nav__Lang} />
      </div>
    </div>
  );
};

export default Nav;
