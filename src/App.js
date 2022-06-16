import { Button } from 'antd';
import { getSingleProductAction } from './store/products/slice';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Layout from './components/Layout/Layout';
import Product from './components/Product/Product';
import './styles/global.scss';
import ProductPage from './containers/ProductPage/ProductPage';

function App() {
  return (
    <Layout>
      <ProductPage />
    </Layout>
  );
}

export default App;
