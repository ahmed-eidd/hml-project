import React from 'react';
import { Image, Skeleton } from 'antd';
import classes from './Product.module.scss';
import { extendClasses } from '../../utilities/extendClasses';
import { ReactComponent as Icon } from '../../assets/arrowDown.svg';
import Select from '../Select/Select';
import Button from '../Button/Button';

const Product = ({
  img,
  name,
  productDes,
  price,
  isLoading = true,
  qunatity,
  className,
  style,
}) => {
  return (
    <div className={extendClasses(classes.Product, className)}>
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
              <h3 className={classes.Product__Info__Title}>Product Title</h3>
              <p className={classes.Product__Info__Price}>9.99 LE</p>
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
            <Button>Add</Button>
          </div>

          <Select
            icon={<Icon />}
            loading={isLoading}
            // overlayClassName={classes.Product__DropdownMenu}
          />
        </>
      )}
    </div>
  );
};

export default Product;
