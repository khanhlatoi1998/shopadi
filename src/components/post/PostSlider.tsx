import { NavLink } from "react-router-dom";
import { PostType } from "../../contains/type";

interface Props {
    item: PostType;
}


const Post: React.FC<Props> = ({
    item,
}) => {

    return (
        <NavLink to={`/blogs`} className="mt-8">
            <div className="relative pt-[67%]">
                <figure className="">
                    <img  className="absolute inset-0 w-full h-full object-fill" src={item.image} alt="" />
                </figure>
            </div>
            <div className="p-4">
                <p className="font-medium text-[17px]">{item.title}</p>
                <p className="mt-4">{item.desc}</p>
                <p className="mt-4 font-medium hover:text-color_01">Read more</p>
            </div>
            <div className="px-4 py-3 bg-color_05 flex flex-wrap gap-4 items-center">
                <div className="flex items-center">
                    <span><i className="fa fa-comment"></i></span>
                    <p className="ml-2 mt-[-2px]">{item.comment.length} comments</p>
                </div>
                <div className="flex items-center">
                    <i className="ti-calendar"></i>
                    <p className="ml-2 mt-[-2px]">{item.createDate}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default Post;