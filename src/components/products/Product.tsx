const Product = () => {
    return (
        <div className="">
            <div className="overflow-hidden group relative sm:pt-[150%] pt-[120%] cursor-pointer">
                <figure className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
                    <img className="w-full h-full object-fill" src="../images/brand_03.jpg" alt="" />
                </figure>
                <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-20">
                    <figure className="group-hover:w-full group-hover:h-full duration-500 absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] right-0 bottom-0 w-[0] h-[80%]">
                        <img className="w-full h-full object-fill" src="../images/brand_01.jpg" alt="" />
                    </figure>
                    <div className="group-hover:translate-x-[-15px] group-hover:opacity-100 duration-300 absolute top-4 right-[0] translate-x-[110%] z-30 text-[17px] opacity-0 bg-white border border-solid border-color_07">
                        <div className="py-2 px-3"><i className="ti-heart"></i></div>
                        <div className="py-2 px-3 border-y border-solid border-color_07"><i className="ti-eye"></i></div>
                        <div className="py-2 px-3"><i className="ti-loop"></i></div>
                    </div>
                    <div className="group-hover:translate-y-[-20px] group-hover:opacity-100 duration-300 bg-color_06 text-white absolute py-3 left-[50%] translate-y-[110%] translate-x-[-50%] opacity-0 bottom-0 w-[93%] text-center">
                        ADD TO CART
                    </div>
                </div>

            </div>
            <div className="text-center mt-5">
                <p>shots slive tshirt</p>
                <p className="text-color_01 font-medium text-price">$241.99</p>
            </div>
        </div>

    );
};

export default Product;