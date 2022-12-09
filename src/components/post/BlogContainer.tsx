import BlogItem from "../blog/BlogItem";

const BlogContainer = () => {
    return (
        <section>
            <p className="text-title font-bold">BLOG</p>
            <div>
                <BlogItem />
                <BlogItem />
            </div>
        </section>
    );
};

export default BlogContainer;