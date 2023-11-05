import inputFieldStyle from './InputField.module.css'

export default function InputField({ id, label, placeholder, type, value, onChange, required }) {
    return (
        <div className={ inputFieldStyle.InputField }>
            { label && <label htmlFor={ id }>{ label }</label>}
            <input 
                type={ type } 
                id={ id } 
                className={ inputFieldStyle.Input } 
                placeholder={ placeholder } 
                name={ id } 
                value={ value } 
                onChange={ onChange }
                required={ required }
            />
        </div>
    )
}
