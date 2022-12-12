import BlogContainer from "../components/post/BlogContainer";
import Breadcrumb from "../components/breadcrumb";
import Sidebar from "../components/sidebar";

const BlogTemplate = () => {
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
                        <BlogContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTemplate