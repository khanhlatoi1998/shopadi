import Product from "./Product";
import SortTemplate from "./SortTemPlate";
import ReactPaginate from "react-paginate";
import { ProductType } from "../../contains/type";

interface Props {
    title: string;
    listProduct: Array<ProductType>;
}

const ProductContainer: React.FC<Props> = ({
    title,
    listProduct,
}) => {
    console.log(listProduct);

    const handlePageClick = (e: any) => {
        
        console.log(e.selected);
    };
    return (
        <section>
            <div className="text-title font-bold uppercase">{title}</div>
            <div className="mt-8">
                <SortTemplate />
                <div className="grid grid-cols-3 gap-8 py-8">
                    {
                        listProduct?.map(item => (
                            <Product key={item.id} item={item} />
                        ))
                    }
                </div>
                <div>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel=">"
                        previousLabel="<"
                        className="flex justify-end gap-3 text-sm"
                        pageLinkClassName="px-4 py-[8px] bg-color_05 hover:bg-color_01 hover:text-white"
                        activeLinkClassName="!bg-color_01 text-white"
                        previousLinkClassName="px-2 py-1"
                        nextLinkClassName="px-2 py-1"
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={2}
                        pageCount={3}
                        onPageChange={handlePageClick}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductContainer;