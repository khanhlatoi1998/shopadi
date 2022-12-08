import Sidebar from "../components/sidebar";
import MenuSidebar from "../components/sidebar/menu/MenuSidebar";

const ProductTemplate = () => {
    return (
        <div className="ProductTemplate ">
            <div className="py-8 bg-color_05">
                <div className="container__main ">
                    <div className="">
                        <span><i className="fa fa-home"></i></span>
                        <span><i className="ti-angle-right mx-2 text-[12px]"></i></span>
                        <span className="text-color_01">Men</span>
                    </div>
                </div>
            </div>
            <div className="container__main flex gap-6 py-16">
                <div className="w-[300px]">
                    <div>
                        <Sidebar />
                    </div>
                    <div>

                    </div>
                </div>
                <div className="flex-1 bg-slate-800">

                </div>
            </div>
        </div>
    )
};

export default ProductTemplate;