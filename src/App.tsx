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

// import HomePage from './pages/HomePage';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import ProductTemplate from './pages/ProductsTemplate';
import Breadcrumb from './components/breadcrumb';
import DetailTemplate from './pages/DetailTemplate';
import BlogTemplate from './pages/BlogTemplate';
import React, { Suspense } from 'react';

function App() {
  const HomePage = React.lazy(() => import('./pages/HomePage'));

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
              element={<HomePage />}
            />
            <Route
              path="/men"
              element={<ProductTemplate title="men" />}
            />
            <Route
              path="/womens"
              element={<ProductTemplate title="womens" />}
            />
            <Route
              path="/shop"
              element={<ProductTemplate title="shop" />}
            />
            <Route
              path="/office"
              element={<ProductTemplate title="office wear" />}
            />
            <Route
              path="/products"
              element={<ProductTemplate title="products" />}
            />
            <Route
              path="/detail"
              element={<DetailTemplate />}
            />
            <Route
              path="/blogs"
              element={<BlogTemplate />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
