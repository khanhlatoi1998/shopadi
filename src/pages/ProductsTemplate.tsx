import { useEffect } from "react";
import Breadcrumb from "../components/breadcrumb";
import ProductContainer from "../components/products/ProductContainer";
import Sidebar from "../components/sidebar";
import { ProductType } from "../contains/type";
import productApi from '../api/productsApi';
interface Props {
    title: string;
    dataProducts: Array<ProductType>;
    category: string;
}

const ProductTemplate: React.FC<Props> = ({
    title,
    dataProducts,
    category
}) => {

    useEffect(() => {
        const params = {
            page: 2,
            limit: 3
        }
        productApi.getAllPagination(params)
            .then(() => {

            })
            .catch(() => { });
    }, []);

    return (
        <div className="ProductTemplate">
            <Breadcrumb title={title} />
            <div className="container__main flex gap-6 py-16">
                <div className="w-[285px] hidden md:block">
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <ProductContainer title={title} dataProducts={dataProducts} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductTemplate;