const TopHeader = () => {
    return (
        <div className="lg:flex hidden justify-between items-center px-8 pt-2 pb-3 border-b border-color_07 border-solid bg-white">
            <nav>
                <i className="fa-solid fa-phone mr-1"></i>
                <span>Free Support: 123456789</span>
            </nav>
            <nav>
                <ul className="flex gap-4 items-center">
                    <li>
                        <i className="fa-solid fa-user"></i>
                        <span className="mx-1">My Account</span>
                        <i className="fa-solid fa-angle-down text-[10px]"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-dollar-sign"></i>
                        <span className="mx-1">Currency</span>
                        <i className="fa-solid fa-angle-down text-[10px]"></i>
                    </li>
                    <li>
                        <i className="fa-solid fa-language"></i>
                        <span className="mx-1">Language</span>
                        <i className="fa-solid fa-angle-down text-[10px]"></i>
                    </li>
                    <li>
                        <span className="mx-1">Contact Us</span>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TopHeader;