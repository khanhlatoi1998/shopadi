import Product from "./Product";
import SortTemplate from "./SortTemPlate";
import ReactPaginate from "react-paginate";
import { DataProductsType, ProductType } from "../../contains/type";
import { ClipLoader } from "react-spinners";
import productApi from "../../api/productsApi";

interface Props {
    title: string | undefined;
    data: DataProductsType | undefined;
    handlePageClick: (e: any) => void;
}

const ProductContainer: React.FC<Props> = ({
    title,
    data,
    handlePageClick
}) => {

    let pageCount = Math.ceil(data?.total ? (data?.total / data?.limit) : 4);

    return (
        <section>
            <div className="lg:text-title text-size-4 font-bold uppercase">{title}</div>
            <div className="mt-8">
                <SortTemplate />
                {data?.data?.length 
                    ? <div className="grid grid-cols-3 gap-8 py-8">
                        {
                            data?.data?.map((item: ProductType) => (
                                <Product key={item._id} item={item} />
                            ))
                        }
                    </div>
                    : <div className="h-[400px] flex items-center justify-center">
                        <ClipLoader
                            color={'blue'}
                            loading={true}
                            // cssOverride={override}
                            size={50}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                }
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
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                    />
                </div>
            </div>
        </section>
    );
};

export default ProductContainer;