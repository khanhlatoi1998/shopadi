import { FastField, Formik, Form } from "formik";
import { NavLink } from "react-router-dom";
import { ContactType, ProductType } from "../../contains/type";
import InputFiled from "./custom-fields/InputField";
import TextAreaField from "./custom-fields/TextAreaField";
import * as yup from 'yup';
import { useSelector } from "react-redux";
import orderApi from "../../api/orderApi";

const ContactUserForm = () => {

    const listCart = useSelector((state: any) => state.listCart);
    const initialValues = {
        name: '',
        phone: '',
        address: '',
        note: ''
    }

    const onSubmit = (values: ContactType) => {
        const createDate = new Date();
        const total = listCart.reduce((total: any, item: ProductType ) => {
            return {
                price: total.price + (item.quantity * item.price),
                item: total.item + item.quantity
            };
        }, {price: 0, item: 0});

        const order = {
            user: values,
            items: listCart,
            total_price: total.price,
            total_item: listCart.length,
            total_quantity: total.item,
            createDate: createDate,
        };

        orderApi.postOrder(order).then((res) => {
            console.log(res);
        }).catch((err) => { });
    };

    const validationSchema = yup.object().shape({
        name: yup.string().required('vui lòng nhập tên'),
        phone: yup.string().matches(/^[0-9]+$/, 'vui lòng nhập số không phải ký tự').min(10, 'vui lòng nhập đủ 10 hoặc 11 số').max(11, 'vui lòng nhập đủ 10 hoặc 11 số').required('vui lòng nhập số điện thoại'),
        address: yup.string().required('vui lòng nhập địa chỉ'),
    });

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {formikProps => {
                    return (
                        <Form className="flex flex-col gap-2">
                            <FastField
                                label="Tên"
                                name="name"
                                className="mt-1 px-4 py-2 border border-solid border-color_07 rounded w-full"
                                placeholder="Tên người nhận"
                                component={InputFiled}
                            >
                            </FastField>
                            <FastField
                                label="Điện thoại liên lạc"
                                name="phone"
                                className="mt-1 px-4 py-2 border border-solid border-color_07 rounded w-full"
                                placeholder="Số điện thoại"
                                component={InputFiled}
                            >
                            </FastField>
                            <FastField
                                label="Địa chỉ nhận hàng"
                                name="address"
                                className="mt-1 px-4 py-2 border border-solid border-color_07 rounded w-full"
                                placeholder="Địa chỉ nhận hàng"
                                component={InputFiled}
                            >
                            </FastField>
                            <FastField
                                label="Ghi chú"
                                name="note"
                                className="mt-1 px-4 py-2 min-h-[60px] border border-solid rounded border-color_07 w-full"
                                placeholder=""
                                component={TextAreaField}
                            >
                            </FastField>
                            <button type="submit" className="rounded bg-color_01 w-full py-2 text-white">ĐẶT HÀNG</button>
                        </Form>

                    )
                }}
            </Formik>
            <NavLink to="/" className="text-center w-full block mt-4">TIẾP TỤC MUA HÀNG</NavLink>
        </div>
    );
};

export default ContactUserForm;