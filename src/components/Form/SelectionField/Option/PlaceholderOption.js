import optionStyle from './Option.module.css'

function PlaceholderOption({ placeholder }) {
    return <option value="" className={ optionStyle.Placeholder }>{ placeholder }</option>
}

export default PlaceholderOption
