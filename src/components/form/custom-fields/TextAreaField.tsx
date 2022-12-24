
interface Props {
    field: any;
    form: any;
    type: string;
    className: string;
    label: string;
    placeholder: string;
}

const TextAreaField: React.FC<Props> = ({
    type, className, label, placeholder,
    field, form
}) => {

    const { name, value, onChange, obBlur } = field;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <br />
            <textarea
                className={className}
                name={name}
                {...field}
                type={type}
                
                placeholder={placeholder}
            />
        </div>
    );
}

export default TextAreaField;