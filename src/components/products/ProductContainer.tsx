import Product from "./Product";
import SortTemplate from "./SortTemPlate";

const ProductContainer = () => {
    return (
        <section>
            <div className="text-title font-bold">MEN</div>
            <div className="mt-8">
                <SortTemplate />
                <div className="grid grid-cols-3 gap-8 py-8">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </section>
    );
};

export default ProductContainer;