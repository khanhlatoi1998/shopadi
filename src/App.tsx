import './style/global.scss';
import './style/custom.scss';
import './style/themify-icons.css'
import "swiper/css";
import "swiper/css/navigation";
// import HomePage from './pages/HomePage';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import ProductTemplate from './pages/ProductsTemplate';
import Breadcrumb from './components/breadcrumb';
import DetailTemplate from './pages/DetailTemplate';
import BlogTemplate from './pages/BlogTemplate';
import React, { Suspense } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  const HomePage = React.lazy(() => import('./pages/HomePage'));

  return (
    <div className="App">
      <Suspense fallback={<div>Loadding....</div>}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<HomePage />}
            />
            <Route
              path="/men"
              element={<ProductTemplate path="men" />}
            />
            <Route
              path="/women"
              element={<ProductTemplate path="women" />}
            />
            <Route
              path="/detail"
              element={<DetailTemplate />}
            />
            <Route
              path="/blog"
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
