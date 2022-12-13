import { PostType } from "../../contains/type";
import BlogItem from "./BlogItem";


interface Props {
    dataPosts: Array<PostType>;
}

const BlogContainer: React.FC<Props> = ({
    dataPosts
}) => {

    return (
        <section>
            <p className="text-title font-bold">BLOG</p>
            <div>
                {
                    dataPosts?.map((item: PostType) => (
                        <div key={item.id}>
                            <BlogItem item={item}/>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default BlogContainer;