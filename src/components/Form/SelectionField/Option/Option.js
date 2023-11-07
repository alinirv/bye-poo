import optionStyle from './Option.module.css'

function Option({ value, description, selected }) {
    return <option value={ value } className={ optionStyle.Option } selected={ selected }>{ description }</option>
}

export default Option
