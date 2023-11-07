import optionStyle from './Option.module.css'

function Option({ value, description }) {
    return <option value={ value } className={ optionStyle.Option }>{ description }</option>
}

export default Option
