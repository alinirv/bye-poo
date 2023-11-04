import optionStyle from './Option.module.css'

function Option({ key, value, description }) {
    return <option key={ key } value={ value }>{ description }</option>
}

export default Option
