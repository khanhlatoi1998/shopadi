import { NavLink } from "react-router-dom";

interface Props {
    path: string;
}


const Breadcrumb: React.FC<Props> = ({
    path
}) => {
    return (
        <div className="py-8 bg-color_05">
            <div className="container__main ">
                <div className="">
                    <span><i className="fa fa-home"></i></span>
                    {
                        path && <>
                            <span><i className="ti-angle-right mx-2 text-[12px]"></i></span>
                            <NavLink to={`/${path}`} className="text-color_01 capitalize">{path}</NavLink>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;