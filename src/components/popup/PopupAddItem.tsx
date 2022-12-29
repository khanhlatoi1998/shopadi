import { useSelector } from "react-redux";



const PopupAddItem = () => {
    const isShow = useSelector((state: any) => state.addedCartItem);
    return (
        <div className={`duration-[1s] linear ${isShow ? 'z-[100]' : 'opacity-0 hidden'} fixed flex-col gap-4 lg:top-[110px] top-[90px] right-0 left-0 lg:left-auto z-50 `}>
            <div className="rounded-md px-4 py-3 text-[#2076c1] bg-[#ccdddd] min-w-[350px]">
                <div className="flex justify-between items-center">
                    <p className="font-medium">Cập nhật giỏi hàng</p>
                    <span>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>
                <p className="mt-1">Đã thêm sản phẩm vào giỏ hàng.</p>
            </div>
        </div>
    );
};

export default PopupAddItem;

