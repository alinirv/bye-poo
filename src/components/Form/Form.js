import formStyle from './Form.module.css'

function Form({ id, children }) {
    return (
        <form id={ id } className={ formStyle.Form } onSubmit={ (event) => event.preventDefault() }>
            { children }
        </form>
    )
}

export default Form
