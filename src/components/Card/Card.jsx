import React from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import classes from './Card.module.scss';
import { ReactComponent as FavIcon } from '../../assets/fav.svg';
import { limitText } from '../../utilities/limitText';

const Card = ({ quantity, title, img, oldPrice, newPrice, id, discount }) => {
  return (
    <div className={classes.Card}>
      <FavIcon className={classes.Card__FavBtn} />
      {discount && (
        <div className={classes.Card__Discount}>
          {Math.floor(discount) + '%'}
        </div>
      )}
      <div className={classes.Card__Content}>
        <a
          href='##'
          style={{ height: '100px', width: 'auto' }}
          className={classes.Card__Img}
        >
          <img src={img} alt={title} />
        </a>
        <Select options={quantity} />
        <h4 className={classes.Card__Title}>{limitText(title, 20)}</h4>
        <div className={classes.Card__Prices}>
          <p className={classes.Card__Prices__NewPrice}>{newPrice + 'EGP'}</p>
          <p className={classes.Card__Prices__OldPrice}>{oldPrice + 'EGP'}</p>
        </div>
      </div>
      <Button className={classes.Card__Button} variant='dark'>
        Add to cart
      </Button>
    </div>
  );
};

export default Card;
