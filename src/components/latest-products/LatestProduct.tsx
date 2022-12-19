import SliderProducts from "../products/SliderProducts";
import { ProductType } from "../../contains/type";

interface Props {
    sliderProducts: Array<ProductType>;
}

const LatestProduct: React.FC<Props> = ({
    sliderProducts,
}) => {
    let limit = 12;
    const newListProduct = sliderProducts && [...sliderProducts].reverse();

    return (
        <section className="latest">
            <div className="container__main px-8 md:py-20 py-12">
                <h1 className="font-bold md:text-title text-title_mb text-center">LATEST</h1>
                <SliderProducts sliderProducts={newListProduct} />
            </div>
        </section>
    );
};

export default LatestProduct;