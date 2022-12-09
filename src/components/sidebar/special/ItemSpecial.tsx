const ItemSpecial = () => {
    return (
        <a href="/" className="sidebar-special-item flex gap-4 py-3">
            <div className="max-w-[70px]">
                <img src="../images/products/3-255x348.jpg" alt="" />
            </div>
            <div className="flex-1 flex flex-col gap-3">
                <p>ladies shirt</p>
                <div className="flex gap-2 text-color_01">
                    <span><i className="ti-star"></i></span>
                    <span><i className="ti-star"></i></span>
                    <span><i className="ti-star"></i></span>
                    <span><i className="ti-star"></i></span>
                    <span><i className="ti-star"></i></span>
                </div>
                <div className="text-size-1 font-medium">
                    <span className="text-color_01">$100.00</span>
                    <span className="text-sale ml-2 line-through">$100.00</span>
                </div>
            </div>
        </a>
    );
};

export default ItemSpecial;