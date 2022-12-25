import { useEffect, useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import ProductContainer from "../components/products/ProductContainer";
import Sidebar from "../components/sidebar";
import { DataProductsType, ProductType } from "../contains/type";
import productApi from '../api/productsApi';
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

    const [data, setData] = useState<DataProductsType>();

    const handlePageClick = (e: any) => {
        console.log(e.selected + 1);
        const params = {
            limit: 12,
            page: e.selected + 1
        }
        productApi.getCategoryItems(category, params)
            .then((res: any) => {
                setData(res);
            })
            .catch((err) => { })
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const params = {
            page: 1,
            limit: 12
        }
        productApi.getCategoryItems(category, params)
            .then((res: any) => {
                setData(res);
            })
            .catch(() => { });
    }, [window.location.href]);



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