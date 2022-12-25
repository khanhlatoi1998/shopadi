import { FastField, Form, Formik } from "formik";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ProductType } from "../../contains/type";
import { removeItemCart } from "../../redux/sliderListCart";
import InputNumberFiled from "../form/custom-fields/InputNumberField";

interface Props {
    item: ProductType;
}

const CartItem: React.FC<Props> = ({
    item
}) => {
    const dispatch = useDispatch();
    const refFormCartItem = useRef<any>(null);

    const handleRemoveItemCart = () => {
        dispatch(removeItemCart(item));
    };

    const onSubmit = async (values: ProductType) => {
        console.log(values);
    };


    return (
        <div className="flex items-start gap-4 py-4 px-2 border-y border-solid border-color_07">
            <div className="flex items-center gap-4">
                <span onClick={handleRemoveItemCart}>
                    <i className="fa-solid fa-xmark text-[#ff0000ab] cursor-pointer"></i>
                </span>
                <NavLink to={`/detail/${item._id}`}>
                    <img className="w-[70px]" src={item.image} alt="" />
                </NavLink>

            </div>
            <Formik
                enableReinitialize={true}
                initialValues={item}
                onSubmit={onSubmit}
                validate={() => ({})} // err can not submit but dont handle
            >
                {formikProps => {
                    const { values } = formikProps;
                    return (
                        <Form className="flex flex-col gap-4">
                            <NavLink to={`/detail/${item._id}`}>{item.name}</NavLink>
                            <div className="flex items-center gap-3">
                                <p>Màu: </p>
                                {
                                    <div style={{ backgroundColor: item.color }} className={`w-[25px] h-[25px] cursor-pointer`}></div>
                                }
                                <p>Size: </p>
                                {
                                    <div className="w-[25px] h-[25px] border border-solid flex items-center justify-center cursor-pointer">{item.size}</div>
                                }
                                <p>Giá: </p>
                                {
                                    <div className="text-text">{new Intl.NumberFormat().format(item.price)}đ</div>
                                }
                            </div>
                            <div className="flex items-center">
                                <div className="number-input">
                                    <FastField
                                        name="quantity"
                                        min="1"
                                        type="number"
                                        className=""
                                        listValue={values}
                                        value={values.quantity}
                                        component={InputNumberFiled}
                                    >
                                    </FastField>
                                </div>
                            </div>
                            <p className="">{new Intl.NumberFormat().format(values.price * values.quantity)}đ</p>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    );
};

export default CartItem;