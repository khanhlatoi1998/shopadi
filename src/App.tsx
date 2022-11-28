import './style/global.scss';
import './style/custom.scss';
import './style/themify-icons.css'
import HomePage from './pages/HomePage';
import Footer from './components/footer/footer';
import Header from './components/header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
