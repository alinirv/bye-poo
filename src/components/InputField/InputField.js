export default function InputField({ id, label, placeholder, type, value }) {
    return (
        <>
            <label htmlFor={ id }>{ label }</label>
            <input type={ type } id={ id } placeholder={ placeholder } name={ id } value={ value } />
        </>
    )
}
