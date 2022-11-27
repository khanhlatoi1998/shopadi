import Banner from "../components/banner";
import Brand from "../components/brand/brand";
import Customer from "../components/customer/customer";
import Header from "../components/header/Header";
import Latest from "../components/latest/latest";
import Parallax from "../components/parallax/parallax";
import Partners from "../components/partners/partners";
import ListPost from "../components/post/ListPost";
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
            <Customer />
            <ListPost />
            <Partners />
        </section>
    );
};

export default HomePage;