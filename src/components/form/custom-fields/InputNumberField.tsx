import { useDispatch } from "react-redux";
import { updateItemCart } from "../../../redux/sliderListCart";

interface Props {
    field: any;
    form: any;
    type?: any;
    disable?: any;
    className?: string;
    listValue?: any;
};


const InputNumberFiled: React.FC<Props> = ({
    className, type, listValue,
    field, form
}) => {
    const dispatch = useDispatch();
    const { name, value, onChange, onBlur } = field;

    const countDown = () => {
        if (value > 1) {
            const newValue = value - 1;
            form.setFieldValue(name, newValue);
            const newListValue = {...listValue, quantity: newValue};
            dispatch(updateItemCart(newListValue));
        }
    };

    const countUp = () => {
        if (value < 99) {
            const newValue = value + 1;
            form.setFieldValue(name, newValue);
            const newListValue = {...listValue, quantity: newValue};
            dispatch(updateItemCart(newListValue));
        }
    };

    return (
        <div className="number-input">
            <button onClick={countDown} type="submit"></button>
            <input
                id={name}
                className={className}
                {...field}

                type={type}
            />
            <button onClick={countUp} className="plus" type="button"></button>
        </div>

    );
}

export default InputNumberFiled;

