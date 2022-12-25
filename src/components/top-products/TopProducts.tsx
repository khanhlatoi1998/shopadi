import SliderProducts from "../products/SliderProducts";
import { ProductType } from "../../contains/type";

interface Props {
    sliderProducts: Array<ProductType>;
}

const ListTopProducts: React.FC<Props> = ({
    sliderProducts,
}) => {

    return (
        <section className="products">
            <div className="container__main px-8 md:pb-20 pb-12">
                <h1 className="font-bold md:lg:text-title text-size-4 lg:text-title text-size-4_mb text-center">TOP PRODUCTS</h1>
                <div className="md:mt-12 mt-8 flex justify-center">
                    <a href="#" className="font-medium px-5">FEATURED</a>
                    <a href="#" className="font-medium px-5 border-x border-solid border-color_07">SPECIAL</a>
                    <a href="#" className="font-medium px-5">BESTSELLER</a>
                </div>
                <SliderProducts sliderProducts={sliderProducts}/>
            </div>
        </section>
    )
};

export default ListTopProducts;