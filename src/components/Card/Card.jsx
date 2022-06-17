import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import classes from './Card.module.scss';
import { ReactComponent as FavIcon } from '../../assets/fav.svg';
import { useDispatch } from 'react-redux';
import { limitText } from '../../utilities/limitText';
import CounterBtn from '../CoutnerBtn/CounterBtn';
import {
  addRelatedProductToCartAction,
  deleteRelatedProductFromCartAction,
  updateRelatedProductInCartAction,
} from '../../store/products/slice';

const Card = ({
  quantity,
  title,
  img,
  oldPrice,
  newPrice,
  id,
  discount,
  inCart,
}) => {
  const [loading, setLoading] = useState(false);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const dispatch = useDispatch();
  const onQuantityChangeHandler = (value) => {
    setCurrentQuantity(value);
    if (inCart) {
      onUpdateCartHandler(value);
    }
  };
  const onAddToCartHandler = () => {
    setLoading(true);
    dispatch(addRelatedProductToCartAction({ id, quantity: currentQuantity }));
  };
  const onDeleteFromCartHandler = () => {
    setLoading(true);
    dispatch(deleteRelatedProductFromCartAction(inCart?.itemId));
  };
  const onUpdateCartHandler = (amount) => {
    setLoading(true);
    if (amount === 0) {
      onDeleteFromCartHandler();
    } else {
      dispatch(
        updateRelatedProductInCartAction({
          id: inCart.itemId,
          quantity: amount,
        })
      );
    }
  };
  useEffect(() => {
    setLoading(false);
  }, [inCart, inCart?.quantity]);
  return (
    <div className={classes.Card}>
      <FavIcon className={classes.Card__FavBtn} />
      {discount && (
        <div className={classes.Card__Discount}>
          {Math.floor(discount) + '%'}
        </div>
      )}
      <div className={classes.Card__Content}>
        <a href='##' className={classes.Card__Img}>
          <img src={img} alt={title} />
        </a>
        <Select
          onChange={onQuantityChangeHandler}
          options={quantity}
          value={inCart ? inCart.quantity : currentQuantity}
        />
        <h4 className={classes.Card__Title}>{limitText(title, 20)}</h4>
        <div className={classes.Card__Prices}>
          <p className={classes.Card__Prices__NewPrice}>{newPrice + 'EGP'}</p>
          <p className={classes.Card__Prices__OldPrice}>{oldPrice + 'EGP'}</p>
        </div>
      </div>
      {inCart ? (
        <CounterBtn
          className={classes.Card__CounterButton}
          count={inCart?.quantity}
          loading={loading}
          onDecrement={() => onUpdateCartHandler(+inCart.quantity - 1)}
          onIncrement={() => onUpdateCartHandler(+inCart.quantity + 1)}
          onDelete={onDeleteFromCartHandler}
          size='small'
        />
      ) : (
        <Button
          className={classes.Card__Button}
          onClick={onAddToCartHandler}
          variant='dark'
          loading={loading}
          disabled={loading}
        >
          Add to cart
        </Button>
      )}
    </div>
  );
};

export default Card;
