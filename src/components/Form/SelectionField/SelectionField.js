import { useEffect, useState } from 'react'
import selectionFieldStyle from './SelectionField.module.css'

function SelectionField({ id, label, placeholder, options }) {
    const [ selectColor, setSelectColor ] = useState({ color: "var(--placeholder-color)" })

    useEffect(() => {
        const select = document.querySelector(`select#${id}`)
        setSelectColor({ color: select.value == '' ? 'var(--placeholder-color' : 'black' })
    })

    return (
        <div className={ selectionFieldStyle.SelectionField }>
            <label htmlFor={ id }>{ label }</label>
            <select id={ id } className={ selectionFieldStyle.Selection } name={ id } style={ selectColor }>
                <option value="" className={ selectionFieldStyle.Placeholder }>{ placeholder }</option>
            </select>
        </div>
    )
}

export default SelectionField