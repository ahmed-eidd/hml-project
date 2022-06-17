import React, { useState } from 'react';
import { Skeleton } from 'antd';
import { useDispatch } from 'react-redux';
import classes from './Product.module.scss';
import { extendClasses } from '../../utilities/extendClasses';
import { ReactComponent as Icon } from '../../assets/arrowDown.svg';
import Select from '../Select/Select';
import Button from '../Button/Button';
import {
  addSingleProductToCartAction,
  deleteSingleProductFromCartAction,
  updateSingleProductInCartAction,
} from '../../store/products/slice';
import CounterBtn from '../CoutnerBtn/CounterBtn';

const Product = ({
  img,
  name,
  productDes,
  price,
  isLoading,
  isLoadingCart,
  quantities = [],
  className,
  style,
  id,
  inCart,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const dispatch = useDispatch();
  const onQuantityChangeHandler = (value) => {
    setCurrentQuantity(value);
    if (inCart) {
      onUpateProductToCartHandler(value);
    }
  };

  const onAddProductToCartHandler = () => {
    dispatch(addSingleProductToCartAction({ id, quantity: currentQuantity }));
  };

  const onDeleteProductFromCartHandler = () => {
    if (window.confirm('Are you sure?')) {
      dispatch(deleteSingleProductFromCartAction(inCart.itemId));
      setCurrentQuantity(1);
    }
  };

  const onUpateProductToCartHandler = (amount) => {
    if (amount === 0) {
      onDeleteProductFromCartHandler();
    } else {
      dispatch(
        updateSingleProductInCartAction({
          id: inCart.itemId,
          quantity: amount,
        })
      );
    }
  };

  return (
    <div style={style} className={extendClasses(classes.Product, className)}>
      {isLoading ? (
        <div className={classes.Product__Skeleton}>
          <Skeleton.Image />
          <Skeleton active={true} />
          <Skeleton.Button active={true} size='large' />
        </div>
      ) : (
        <>
          <img src={img} alt='product' className={classes.Product__Img} />
          <div className={classes.Product__Info}>
            <div className={classes.Product__Info__TitleAndPriceWrapper}>
              <h3 className={classes.Product__Info__Title}>{name}</h3>
              <p className={classes.Product__Info__Price}>{price + ' LE'}</p>
            </div>
            <p className={classes.Product__Info__Description}>
              <span>
                The Prepacked Mafa Red Cabbage has an intense flavor and crisp
                texture. This vibrant red cabbage is ideal for preparing salads,
                stews, curries and snacks. It is very low in calories, but high
                in essential folate, vitamins, minerals, antioxidants and
                dietary fiber. Loaded with antioxidants, red cabbage is also
                known for its anti-ageing properties.
              </span>
              <span>
                Tastes excellent both in raw and cooked forms Versatile
                ingredient can be used in a wide range of recipes Can be used as
                a flavor enhancer in stews and curries Fresh, wholesome
                vegetable can be used in a variety of recipes
              </span>
            </p>

            {inCart ? (
              <CounterBtn
                loading={isLoadingCart}
                count={inCart.quantity}
                onDelete={onDeleteProductFromCartHandler}
                onIncrement={() =>
                  onUpateProductToCartHandler(+inCart.quantity + 1)
                }
                onDecrement={() =>
                  onUpateProductToCartHandler(+inCart.quantity - 1)
                }
              />
            ) : (
              <Button
                onClick={onAddProductToCartHandler}
                loading={isLoadingCart}
                disabled={isLoadingCart}
              >
                Add
              </Button>
            )}
          </div>
          <Select
            icon={<Icon />}
            loading={isLoadingCart}
            disabled={isLoadingCart}
            onChange={onQuantityChangeHandler}
            options={quantities}
            value={inCart ? inCart.quantity : currentQuantity}
            defaultValue={inCart ? inCart.quantity : quantities[0]?.value}
          />
        </>
      )}
    </div>
  );
};

export default Product;
