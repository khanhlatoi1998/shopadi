import { NavLink } from "react-router-dom";
import { PostType } from "../../contains/type";

interface Props {
    item: PostType;
}

const BlogItem: React.FC<Props> = ({
    item,
}) => {

    return (
        <NavLink to={`/blogs`} className="mt-8">
            <div>
                <div>
                    <img className="w-full h-full object-cover" src={item.image} alt="" />
                </div>
                <h3 className="text-size-1 font-bold mt-2">{item.title}</h3>
                <div className="mt-4 flex flex-wrap gap-4 items-center">
                    <div className="flex items-center">
                        <span><i className="fa fa-comment"></i></span>
                        <p className="ml-2 mt-[-2px]">{item.comment.length} comments</p>
                    </div>
                    <div className="flex items-center">
                        <i className="ti-calendar"></i>
                        <p className="ml-2 mt-[-2px]">{item.createDate}</p>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-text mt-3 pr-4">{item.desc}</p>
                <button className="mt-3">Read more</button>
            </div>
        </NavLink>
    );
};

export default BlogItem;