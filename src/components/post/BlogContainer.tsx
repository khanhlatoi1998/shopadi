import ReactPaginate from "react-paginate";
import { DataPostsType, PostType } from "../../contains/type";
import BlogItem from "./BlogItem";


interface Props {
    dataPosts?: DataPostsType;
    handlePageClick: (e: any) => void;
}

const BlogContainer: React.FC<Props> = ({
    dataPosts,
    handlePageClick
}) => {

    const pageCount = Math.ceil(dataPosts ? dataPosts?.total / dataPosts.limit : 1);

    return (
        <section>
            <p className="lg:text-title text-size-4 font-bold">BLOG</p>
            <div className="mt-6 flex flex-col gap-y-10">
                {
                    dataPosts?.data.map((item: PostType) => (
                        <div key={item.id}>
                            <BlogItem item={item} />
                        </div>
                    ))
                }
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
        </section>
    );
};

export default BlogContainer;