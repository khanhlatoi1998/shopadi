import Breadcrumb from "../components/breadcrumb";
import ProductContainer from "../components/products/ProductContainer";
import Sidebar from "../components/sidebar";
import MenuSidebar from "../components/sidebar/menu/MenuSidebar";

interface Props {
    path: string;
}

const ProductTemplate:React.FC<Props> = ({
    path,
}) => {


    return (
        <div className="ProductTemplate">
            <Breadcrumb path={path}/>
            <div className="container__main flex gap-6 py-16">
                <div className="w-[285px] hidden md:block">
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <ProductContainer />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProductTemplate;