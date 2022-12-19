import BlogContainer from "../components/post/BlogContainer";
import Breadcrumb from "../components/breadcrumb";
import Sidebar from "../components/sidebar";
import { PostType } from "../contains/type";
import { useEffect, useState } from "react";
import postsApi from "../api/postsApi";

interface Props {
    dataPosts: Array<PostType>;
}

const BlogTemplate: React.FC<Props> = ({
    dataPosts
}) => {
    const [listPost, setListPost] = useState<Array<PostType>>([]);

    useEffect(() => {
        const params = {
            limit: 3,
            page: 1
        };
        postsApi.getListPost(params)
        .then((res: any) => {
            setListPost(res);
        })
        .catch((err) => {});
    }, []);

    return (
        <div>
            <Breadcrumb title="blog"/>
            <div className="container__main flex gap-8 py-16">
                <div className="w-[285px] hidden md:block">
                    <div>
                        <Sidebar />
                    </div>
                </div>
                <div className="flex-1">
                    <div>
                        <BlogContainer dataPosts={dataPosts}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTemplate