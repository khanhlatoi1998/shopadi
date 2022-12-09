import './style/global.scss';
import './style/custom.scss';
import './style/themify-icons.css'
import "swiper/css";
import "swiper/css/navigation";
import HomePage from './pages/HomePage';
import Footer from './components/footer/footer';
import Header from './components/header/Header';
import ProductTemplate from './pages/ProductsTemplate';
import Breadcrumb from './components/breadcrumb';
import DetailTemplate from './pages/DetailTemplate';
import BlogTemplate from './pages/BlogTemplate';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage /> */}
      <BlogTemplate />
      <ProductTemplate />
      {/* <DetailTemplate /> */}
      <Footer />
    </div>
  );
}

export default App;
