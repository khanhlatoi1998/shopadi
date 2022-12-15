import { NavLink } from "react-router-dom";

const OrderForm = () => {
    return (
        <div>
            <form action="" className="flex flex-col gap-5">
                <div>
                    <label htmlFor="name-order">Tên</label>
                    <br />
                    <input className="mt-1 px-4 py-2 border border-solid border-color_07 rounded w-full" type="text" name="name-order" id="" placeholder="Tên người nhận" />
                </div>
                <div>
                    <label htmlFor="phone-order">Điện thoại liên lạc</label>
                    <br />
                    <input className="mt-1 px-4 py-2 border border-solid border-color_07 rounded w-full" type="text" name="phone-order" id="" placeholder="Số điện thoại" />
                </div>
                <div>
                    <label htmlFor="">Địa chỉ nhận hàng</label>
                    <br />
                    <input className="mt-1 px-4 py-2 border border-solid border-color_07 rounded w-full" type="text" name="address-order" id="" placeholder="Địa chỉ nhận hàng" />
                </div>
                <div>
                    <label htmlFor="note-order">Ghi chú</label>
                    <br />
                    <textarea name="note-order" className="mt-1 min-h-[60px] border border-solid border-color_07 w-full" />
                </div>
                <button className="rounded bg-color_01 w-full py-2 text-white">ĐẶT HÀNG</button>
            </form>
            <NavLink to="/" className="text-center w-full block mt-4">TIẾP TỤC MUA HÀNG</NavLink>
        </div>
    );
};

export default OrderForm;