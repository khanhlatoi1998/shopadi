import BlogContainer from "../components/post/BlogContainer";
import Breadcrumb from "../components/breadcrumb";
import Sidebar from "../components/sidebar";
import { DataPostsType, PostType } from "../contains/type";
import { useEffect, useState } from "react";
import postsApi from "../api/postsApi";

interface Props {
}

const BlogTemplate: React.FC<Props> = ({
}) => {
    const [dataPosts, setDataPosts] = useState<DataPostsType>();

    const handlePageClick = (e: any) => {
        console.log(e.selected);
        const params = {
            limit: 3,
            page: e.selected + 1
        }
        postsApi.getListPost(params)
            .then((res: any) => {
                setDataPosts(res);
            })
            .catch(err => { });
    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        const params = {
            limit: 3,
            page: 1
        };
        postsApi.getListPost(params)
            .then((res: any) => {
                setDataPosts(res);
            })
            .catch((err) => { });
    }, []);

    return (
        <div>
            <Breadcrumb title="blog" />
            <div className="container__main flex gap-8 pb-16 lg:pt-16 pt-6">
                <div className="w-[285px] hidden md:block">
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <BlogContainer dataPosts={dataPosts} handlePageClick={handlePageClick} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTemplate