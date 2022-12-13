import './style/global.scss';
import './style/custom.scss';
import './style/themify-icons.css'
import "swiper/css";
import "swiper/css/navigation";
import ClipLoader from "react-spinners/ClipLoader";

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { useState, useEffect } from 'react';

// import HomePage from './pages/HomePage';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
// import ProductTemplate from './pages/ProductsTemplate';
import Breadcrumb from './components/breadcrumb';
import DetailTemplate from './pages/DetailTemplate';
import BlogTemplate from './pages/BlogTemplate';
import React, { Suspense } from 'react';
import productApi from './api/productsApi';

function App() {
  const HomePage = React.lazy(() => import('./pages/HomePage'));
  const ProductTemplate = React.lazy(() => import('./pages/ProductsTemplate'));

  const [data, setData] = useState<any>({});

  useEffect(() => {
    productApi.getAll()
      .then((res: any) => {
        setData(res);
        console.log(res);
      })
      .catch((err) => { })
  }, []);

  return (
    <div className="App">
      <Suspense fallback={
        <div className="h-[400px] flex items-center justify-center">
          <ClipLoader
            color={'blue'}
            loading={true}
            // cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      }>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage data={data}/>}
            />
            <Route
              path="/men"
              element={<ProductTemplate title="men"  dataProducts={data?.products}/>}
            />
            <Route
              path="/womens"
              element={<ProductTemplate title="womens" dataProducts={data?.products}/>}
            />
            <Route
              path="/shop"
              element={<ProductTemplate title="shop" dataProducts={data?.products}/>}
            />
            <Route
              path="/office"
              element={<ProductTemplate title="office wear" dataProducts={data?.products}/>}
            />
            <Route
              path="/products"
              element={<ProductTemplate title="products" dataProducts={data?.products}/>}
            />
            <Route
              path="/detail/:id"
              element={<DetailTemplate />}
            />
            <Route
              path="/blogs"
              element={<BlogTemplate dataPosts={data?.posts} />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
