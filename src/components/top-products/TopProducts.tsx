import SliderProducts from "../products/SliderProducts";
import { ProductType } from "../../contains/type";

interface Props {
    dataProducts: Array<ProductType>;
}

const ListTopProducts: React.FC<Props> = ({
    dataProducts,
}) => {

    return (
        <section className="products">
            <div className="container__main px-8 md:pb-20 pb-12">
                <h1 className="font-bold md:text-title text-title_mb text-center">TOP PRODUCTS</h1>
                <div className="md:mt-12 mt-8 flex justify-center">
                    <a href="#" className="font-medium px-5">FEATURED</a>
                    <a href="#" className="font-medium px-5 border-x border-solid border-color_07">SPECIAL</a>
                    <a href="#" className="font-medium px-5">BESTSELLER</a>
                </div>
                <SliderProducts dataProducts={dataProducts}/>
            </div>
        </section>
    )
};

export default ListTopProducts;