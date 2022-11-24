import Banner from "../components/banner";
import Brand from "../components/brand/brand";
import Header from "../components/header/Header";
import Latest from "../components/latest/latest";
import Parallax from "../components/parallax/parallax";
import ListProducts from "../components/products/ListProducts";

const HomePage = () => {
    return (
        <section>
            <Header />
            <Banner />
            <Brand />
            <ListProducts />
            <Parallax />
            <Latest />
        </section>
    );
};

export default HomePage;