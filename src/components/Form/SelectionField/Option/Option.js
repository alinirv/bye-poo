import optionStyle from './Option.module.css'

function Option({ key, value, description }) {
    return <option key={ key } value={ value } className={ optionStyle.Option }>{ description }</option>
}

export default Option
