import { type } from "os";
import { ProductType } from "../../../contains/type";

interface ColorSizeType {
    name: string;
    hex: string;
    active: boolean
}

interface Props {
    field: any;
    form: any;
    type?: any;
    placeholer?: string;
    disable?: any;
    className?: string;
    item: ColorSizeType;
}

const InputRadioFiled: React.FC<Props> = ({
    item, className, type,
    field, form,
}) => {

    const {value, name, onChange, onBlur} = field;
    const customOnChange = (e: any) => {
        const newValue = e.target.value;
        form.setFieldValue(name, newValue);
    }    

    return (
        <div>
            <input
                className={className} 
                id={item.name ?? item}
                {...field}
                checked={value === (item.hex || item)}
                
                onChange={(e) => customOnChange(e)}
                type={type}
                value={item.hex || item}
            />
        </div>
    );
};

export default InputRadioFiled;