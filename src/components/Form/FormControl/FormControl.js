import formControlStyle from './FormControl.module.css'

import SubmitButton from '../SubmitButton'

function FormControl({ formId, buttonDescription, onSubmit }) {
    return (
        <div className={ formControlStyle.FormControl }>
            <SubmitButton id={ `${formId}SubmitButton` } description={ buttonDescription } 
                onClick={ onSubmit } form={ formId }/>
        </div>
    )
}

export default FormControl
