import MenuSidebar from "./menu/MenuSidebar";
import Special from "./special/Special";

const Sidebar = () => {
    return (
        <div>
            <MenuSidebar />
            <Special />
            <div className="">
                <div>
                    <img  className="w-full" src="../images/sidebar/image_01.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;