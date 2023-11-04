import submitButtomStyle from './SubmitButton.module.css'

function SubmitButton({ id, description, onSubmit, onClick, form }) {
    return (
        <button id={ id } className={ submitButtomStyle.SubmitButton } onSubmit={ onSubmit } onClick={ onClick } form={ form }>
            { description }
        </button>
    )
}

export default SubmitButton
