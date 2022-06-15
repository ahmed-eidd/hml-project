import { Button } from 'antd';
import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import Layout from './components/Layout.jsx/Layout';
import './styles/global.scss';

function App() {
  const dispatch = useDispatch();
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      // dispatch(getSingleProductAction('10430'));
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
          ' mafa red cabbage',
        ]}
      />
    </Layout>
  );
}

export default App;
