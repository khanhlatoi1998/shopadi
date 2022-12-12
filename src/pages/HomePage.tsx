import { useEffect, useState } from 'react';

import productApi from '../api/productsApi';

import Banner from "../components/banner";
import Brand from "../components/brand/brand";
import Customer from "../components/customer/customer";
import Header from "../components/header/Header";
import Latest from "../components/latest-products/LatestProduct";
import Parallax from "../components/parallax/parallax";
import Partners from "../components/partners/partners";
import ListPost from "../components/post/ListPostSlider";
import TopProducts from "../components/top-products/TopProducts";

const HomePage = () => {
    const [data, setDate] = useState<any>();

    useEffect(() => {
        productApi.getAll()
            .then((res: any) => {
                console.log(res.brand);
                setDate(res);
            })
            .catch((err) => {})
    }, []);
    return (
        <section>
            <Banner dataBanner={data?.banner}/>
            <Brand dataBrand={data?.brand}/>
            <TopProducts />
            <Parallax />
            <Latest />
            <Customer />
            <ListPost />
            <Partners />
        </section>
    );
};

export default HomePage;