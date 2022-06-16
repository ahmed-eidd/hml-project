import { Button } from 'antd';
import { getSingleProductAction } from './store/products/slice';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Layout from './components/Layout.jsx/Layout';
import Product from './components/Product/Product';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state?.products?.items[0]);
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      dispatch(getSingleProductAction('10430'));
    }
    ref.current = null;
  }, []);
  return (
    <Layout>
      <Breadcrumb
        items={[
          'Home',
          'Fresh vegtables',
          'herbs leaves',
          'prepckaed',
          'mafa red cabbage - 1Piece',
        ]}
      />
      <Product img={product?.image} />
    </Layout>
  );
}

export default App;
