import { useSelector } from "react-redux";
import { ProductType } from "../../contains/type";
import CartItem from "./CartItem";

const CartWrapper = () => {
    const listCart = useSelector((state: any) => state.listCart);

    const total = listCart.reduce((total: number, item: ProductType) => {
        return total + (item.quantity * item.price);
    }, 0);

    return (
        <div>
            {
                listCart?.map((item: ProductType) => <CartItem key={item._id + item.color + item.size} item={item} />)
            }
            <p className="pl-8 pt-2 font-medium">Tổng: {new Intl.NumberFormat().format(total) + 'đ'}</p>
        </div>
    );
};

export default CartWrapper;