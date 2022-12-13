import { useEffect, useState } from 'react';

import productApi from '../api/productsApi';
import Banner from "../components/banner";
import Brand from "../components/brand/brand";
import Customer from "../components/customer/customer";
import Header from "../components/header/Header";
import LatestProduct from "../components/latest-products/LatestProduct";
import Parallax from "../components/parallax/parallax";
import Partners from "../components/partners/partners";
import ListPostSlider from "../components/post/ListPostSlider";
import TopProducts from "../components/top-products/TopProducts";

interface Props {
    data: any;
}

const HomePage: React.FC<Props> = ({
    data
}) => {

    return (
        <section>
            <Banner dataBanner={data?.banner}/>
            <Brand dataBrand={data?.brand}/>
            <TopProducts dataProducts={data?.products}  />
            <Parallax />
            <LatestProduct dataProducts={data?.products} />
            <Customer />
            <ListPostSlider dataPosts={data?.posts} />
            <Partners />
        </section>
    );
};

export default HomePage;