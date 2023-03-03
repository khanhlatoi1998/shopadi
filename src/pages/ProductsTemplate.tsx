import { useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import ProductContainer from "../components/products/ProductContainer";
import Sidebar from "../components/sidebar";
import { DataProductsType, ProductType } from "../contains/type";
import productApi from '../api/productsApi';

import { useQuery } from "@tanstack/react-query";
import { useQueryString } from "contains/hook";
interface Props {
    title: string;
    dataProducts: Array<ProductType>;
    category: string;
}

const ProductTemplate: React.FC<Props> = ({
    title,
    dataProducts,
    category,
}) => {

    // const [data, setData] = useState<DataProductsType>();
    const [_page, setPage] = useState<number | string>(1);
    const params = {
        page: _page,
        limit: 12
    }

    const handlePageClick = (e: any) => {
        console.log(e.selected + 1);
        setPage(e.selected + 1);
        // const params = {
        //     limit: 12,
        //     page: e.selected + 1
        // }
        // productApi.getCategoryItems(category, params)
        //     .then((res: any) => {
        //         // setData(res);
        //     })
        //     .catch((err) => { })
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // const params = {
        //     page: 1,
        //     limit: 12
        // }
        // productApi.getCategoryItems(category, params)
        //     .then((res: any) => {
        //         setData(res);
        //     })
        //     .catch(() => { });
    }, [window.location.href]);

    const {data, isLoading} = useQuery({
        queryKey: ['products', _page], // khi gia tri page thay doi thi queruFn trigger den queryFn va callback fn call API 
        queryFn: () => productApi.getCategoryItems(category, params)
    });

    return (
        <div className="ProductTemplate">
            <Breadcrumb title={title} />
            <div className="container__main flex gap-6 pb-16 lg:pt-16 pt-6">
                <div className="w-[285px] hidden md:block">
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <ProductContainer title={title} data={data} handlePageClick={handlePageClick} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductTemplate;