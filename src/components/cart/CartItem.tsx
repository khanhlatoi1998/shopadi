import { ProductType } from "../../contains/type";

interface Props {
    item: ProductType;
}

const CartItem: React.FC<Props> = ({
    item
}) => {
    return (
        <div className="flex items-start gap-4 py-4 px-2 border-y border-solid border-color_07">
        <div className="flex items-center gap-4">
            <span>
                <i className="fa-solid fa-xmark text-[#ff0000ab] cursor-pointer"></i>
            </span>
            <div>
                <img className="w-[70px]" src={item.image} alt="" />
            </div>

        </div>
        <form className="flex flex-col gap-2">
            <p>{item.name}</p>
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
                    <input className="quantity" min="1" name="quantity" defaultValue="1" type="number"/>
                    <button onClick={(e: any) => { e.preventDefault(); e.target.parentNode.querySelector('input[type=number]').stepUp() }} className="plus"></button>
                </div>
            </div>
            <p className="">{item.price}đ</p>
        </form>
    </div>
    );
};

export default CartItem;