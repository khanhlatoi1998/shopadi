import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Breadcrumb from "../components/breadcrumb";
import CartWrapper from "../components/cart/CartWrapper";
import ContactUserForm from "../components/form/ContactUserForm";

const CartTemplate = () => {
    const listCart = useSelector((state: any) => state.listCart);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <section className="section-card">
            <Breadcrumb title="cart" />
            <div className="container__main">
                {listCart.length > 0
                    ? (<div className="flex py-12 gap-12 flex-wrap">
                        <div className="lg:w-1/2 w-full">
                            <h2 className="text-size-2 font-bold">Chi tiết đơn hàng</h2>
                            <div className="mt-4">
                                <CartWrapper />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-size-2 font-bold">Người mua/nhận hàng</h2>
                            <div className="mt-4">
                                <ContactUserForm />
                            </div>
                        </div>
                    </div>)
                    : (<div className="px-4 py-8">
                        <p className="lg:text-title text-size-4 text-center font-bold">Bạn chưa chọn sản phẩm.</p>
                        <div className="">
                            <img className="max-w-[300px] mx-auto" src="../images/cart/empty-cart.png" alt="" />
                        </div>
                        <NavLink to="/" className="text-center block text-size-1 ">Hãy nhanh tay chọn ngay sản phẩm yêu thích <span className="underline">tại đây.</span> </NavLink>
                    </div>)
                }
            </div>
        </section>
    );
};

export default CartTemplate;