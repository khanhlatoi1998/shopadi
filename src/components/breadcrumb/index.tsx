import { NavLink } from "react-router-dom";

interface Props {
    title: string;
}


const Breadcrumb: React.FC<Props> = ({
    title
}) => {
    return (
        <div className="py-8 bg-color_05 lg:mt-0 mt-[76px]">
            <div className="container__main ">
                <div className="">
                    <span><i className="fa fa-home"></i></span>
                    {
                        title && <>
                            <span><i className="ti-angle-right mx-2 text-[12px]"></i></span>
                            <NavLink to={`/${title}`} className="text-color_01 capitalize">{title}</NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;