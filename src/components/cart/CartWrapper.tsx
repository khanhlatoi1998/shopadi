const CartWrapper = () => {
    return (
        <div>
            <div className="flex items-start gap-4 py-4 px-2 border-y border-solid border-color_07">
                <div className="flex items-center gap-4">
                    <span>
                        <i className="fa-solid fa-xmark text-[#ff0000ab] cursor-pointer"></i>
                    </span>
                    <div>
                        <img className="w-[70px]" src="https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/15-255x348.jpg" alt="" />
                    </div>

                </div>
                <form className="flex flex-col gap-2">
                    <p>Hoodie</p>
                    <div className="flex items-center gap-3">
                            <p>Màu: </p>
                            <ul className="mt-2 flex gap-4">
                                <li className="w-[25px] h-[25px] bg-color_01 cursor-pointer"></li>
                            </ul>
                            <p>Size: </p>
                            <ul className="mt-2 flex gap-4 flex-wrap">
                                <li className="w-[25px] h-[25px] border border-solid border-color_07 flex items-center justify-center cursor-pointer">S</li>
                            </ul>
                        <div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="number-input">
                            <button onClick={(e: any) => { e.preventDefault(); e.target.parentNode.querySelector('input[type=number]').stepDown() }} ></button>
                            <input className="quantity" min="1" name="quantity" defaultValue="1" type="number" />
                            <button onClick={(e: any) => { e.preventDefault(); e.target.parentNode.querySelector('input[type=number]').stepUp() }} className="plus"></button>
                        </div>
                    </div>
                    <p className="">1,925,000</p>
                </form>
            </div>
            <p className="pl-8 pt-2 font-medium">Tổng: 1,925,000</p>
        </div>
    );
};

export default CartWrapper;