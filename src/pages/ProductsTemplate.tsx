import Breadcrumb from "../components/breadcrumb";
import ProductContainer from "../components/products/ProductContainer";
import Sidebar from "../components/sidebar";
import MenuSidebar from "../components/sidebar/menu/MenuSidebar";

const ProductTemplate = () => {
    return (
        <div className="ProductTemplate">
            <Breadcrumb />
            <div className="container__main flex gap-6 py-16">
                <div className="w-[285px]">
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