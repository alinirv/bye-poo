import submitButtomStyle from './SubmitButton.module.css'

function SubmitButton({ id, description, onClick }) {
    return (
        <>
            <button id={ id } className={ submitButtomStyle.SubmitButton } onClick={ onClick }>{ description }</button>
        </>
    )
}

export default SubmitButton
