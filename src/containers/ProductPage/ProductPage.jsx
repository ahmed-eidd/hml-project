import { getSingleProductAction } from '../../store/products/slice';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Product from '../../components/Product/Product';
import Card from '../../components/Card/Card';
import { ArrToValueAndLabel } from '../../utilities/ArrToValueAndLabel';
import classes from './ProductPage.module.scss';

function ProductPage() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.products?.items[0]);
  const relatedProducts = useSelector(
    (state) => state?.products?.relatedProducts
  );
  const productIsLoading = useSelector((state) => state?.products?.isLoading);
  const cartIsLoading = useSelector((state) => state?.products?.isLoadingCart);
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      dispatch(getSingleProductAction('10430'));
    }
    ref.current = null;
  }, []);
  return (
    <>
      <Breadcrumb
        items={[
          'Home',
          'Fresh vegtables',
          'herbs leaves',
          'prepckaed',
          'mafa red cabbage - 1Piece',
        ]}
      />
      <Product
        img={product?.image}
        isLoading={productIsLoading}
        isLoadingCart={cartIsLoading}
        quantities={ArrToValueAndLabel(product?.quantities)}
        price={product?.finalPrice}
        name={product?.name}
        id={product?.id}
        inCart={product?.inCart}
      />
      <div className={classes.ProductPage__RelatedProducts}>
        <h3 className={classes.ProductPage__RelatedProducts__Title}>
          Related Products
        </h3>
        <div className={classes.ProductPage__RelatedProducts__Products}>
          {relatedProducts?.map((el) => {
            return (
              <Card
                discount={el.discount}
                title={el.name}
                img={el.image}
                oldPrice={el.oldPrice}
                newPrice={el.finalPrice}
                quantity={ArrToValueAndLabel(el.quantities)}
                key={el.id}
                inCart={el.inCart}
                id={el.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductPage;
