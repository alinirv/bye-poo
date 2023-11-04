import inputFieldStyle from './InputField.module.css'

export default function InputField({ id, label, placeholder, type, value}) {
    return (
        <div className={ inputFieldStyle.InputField }>
            <label htmlFor={ id }>{ label }</label>
            <input type={ type } id={ id } className={ inputFieldStyle.Input } 
                placeholder={ placeholder } name={ id } value={ value } />
        </div>
    )
}
