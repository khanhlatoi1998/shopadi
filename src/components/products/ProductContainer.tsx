import Product from "./Product";
import SortTemplate from "./SortTemPlate";

interface Props {
    title: string;
}

const ProductContainer: React.FC<Props> = ({
    title
}) => {
    return (
        <section>
            <div className="text-title font-bold uppercase">{title}</div>
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