import { useSelector } from "react-redux";
import { ProductType } from "../../contains/type";
import CartItem from "./CartItem";

const CartWrapper = () => {
    const listCart = useSelector((state: any) => state.listCart);

    return (
        <div>
            {
                listCart?.map((item: ProductType) => <CartItem key={item._id} item={item} />)
            }
            <p className="pl-8 pt-2 font-medium">Tổng: 1,925,000</p>
        </div>
    );
};

export default CartWrapper;