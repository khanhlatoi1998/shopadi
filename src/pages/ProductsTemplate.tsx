import Breadcrumb from "../components/breadcrumb";
import ProductContainer from "../components/products/ProductContainer";
import Sidebar from "../components/sidebar";
import MenuSidebar from "../components/sidebar/menu/MenuSidebar";
import { ProductType } from "../contains/type";

interface Props {
    title: string;
    dataProducts: Array<ProductType>;
}

const ProductTemplate:React.FC<Props> = ({
    title,
    dataProducts,
}) => {

    console.log(dataProducts);

    return (
        <div className="ProductTemplate">
            <Breadcrumb title={title}/>
            <div className="container__main flex gap-6 py-16">
                <div className="w-[285px] hidden md:block">
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <ProductContainer title={title} dataProducts={dataProducts}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductTemplate;