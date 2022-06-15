import React from 'react';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { extendClasses } from '../../utilities/extendClasses';
import classes from './Cart.module.scss';

const Cart = ({ className, style, number, onClick }) => {
  return (
    <div
      style={style}
      onClick={onClick}
      className={extendClasses(classes.Cart, className)}
    >
      <p className={classes.Cart__Number}>{number}</p>
      <Icon className={classes.Cart__Icon} />
    </div>
  );
};

export default Cart;
