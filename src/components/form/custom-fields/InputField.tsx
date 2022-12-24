
interface Props {
    field: any;
    form: any;
    type: string;
    className: string;
    label: string;
    placeholder: string;
}

const InputFiled: React.FC<Props> = ({
    type, className, label, placeholder,
    field, form
}) => {

    const { name, value, onChange, obBlur } = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name]; 

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <br />
            <input
                className={className}
                name={name}
                {...field}
                type={type}
                
                placeholder={placeholder}
            />
            <p className='text-sm text-[#ff7600] min-h-[20px]'>{showError && errors[name]}</p>
        </div>
    );
}

export default InputFiled;