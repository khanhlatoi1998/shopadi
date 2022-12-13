import SliderProducts from "../products/SliderProducts";
import { ProductType } from "../../contains/type";

interface Props {
    dataProducts: Array<ProductType>;
}

const LatestProduct: React.FC<Props> = ({
    dataProducts,
}) => {
    let limit = 12;
    const newListProduct = dataProducts && [...dataProducts].reverse();

    return (
        <section className="latest">
            <div className="container__main px-8 md:py-20 py-12">
                <h1 className="font-bold md:text-title text-title_mb text-center">LATEST</h1>
                <SliderProducts dataProducts={newListProduct} />
            </div>
        </section>
    );
};

export default LatestProduct;