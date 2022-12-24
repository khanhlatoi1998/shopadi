import Breadcrumb from "../components/breadcrumb";
import CartWrapper from "../components/cart/CartWrapper";
import ContactForm from "../components/form/ContactForm";

const CartTemplate = () => {
    return (
        <section className="section-card">
            <Breadcrumb title="cart" />
            <div className="container__main">
                <div className="flex py-12 gap-12 flex-wrap">
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-size-2 font-bold">Chi tiết đơn hàng</h2>
                        <div className="mt-4">
                            <CartWrapper />
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-size-2 font-bold">Người mua/nhận hàng</h2>
                        <div className="mt-4">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartTemplate;