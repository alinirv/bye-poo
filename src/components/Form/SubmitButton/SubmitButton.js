import submitButtomStyle from './SubmitButton.module.css'

function SubmitButton({ id, description, onSubmit, form }) {
    return (
        <button id={ id } className={ submitButtomStyle.SubmitButton } onSubmit={ onSubmit } form={ form }>
            { description }
        </button>
    )
}

export default SubmitButton
