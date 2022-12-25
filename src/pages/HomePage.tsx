import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ortherApi from '../api/ortherApi';
import postsApi from '../api/postsApi';

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
import { PostType, ProductType } from '../contains/type';

import { getDataPosts } from '../redux/sliderPost';

interface Props {
    data: any;
}

const HomePage: React.FC<Props> = React.memo(({
    data
}) => {
    const [sliderPosts, setSliderPosts] = useState<Array<PostType>>([]);
    const [sliderProducts, setSliderProducts] = useState<Array<ProductType>>([]);
    const [dataBanner, setDataBanner] = useState<Array<any>>([]);
    const [dataBrand, setDataBrand] = useState<Array<any>>([]);

    useEffect(() => {
        const paramsPost = {
            limit: 10,
            page: 1
        }

        postsApi.getListPost(paramsPost)
            .then((res: any) => {
                setSliderPosts(res.data);
            })
            .catch(err => { });

        productApi.getAll()
            .then((res: any) => {
                setSliderProducts(res.data);
            })
            .catch(err => { });

        ortherApi.getAll()
            .then((res: any) => {
                setDataBanner(res.banner);
                setDataBrand(res.brand);
            })
            .catch(err => { });
    }, []);

    return (
        <section>
            <Banner dataBanner={dataBanner} />
            <Brand dataBrand={dataBrand} />
            <TopProducts sliderProducts={sliderProducts} />
            <Parallax />
            <LatestProduct sliderProducts={sliderProducts} />
            <Customer />
            <ListPostSlider sliderPosts={sliderPosts} />
            <Partners />
        </section>
    );
});

export default HomePage;