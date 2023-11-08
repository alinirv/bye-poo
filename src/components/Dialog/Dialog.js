import { useState } from 'react'
import dialogStyle from './Dialog.module.css'
import { BiX } from "react-icons/bi";

function Dialog({ children, isActive, setIsActive }) {
    const closeDialog = () => {
        setIsActive(false)
        window.location.href = "/Desistentes"
    }

    if (!isActive)
        return <></>

    return (
        <div className={ dialogStyle.DialogBackground } onClick={ closeDialog } >
            <div className={ dialogStyle.Dialog }>
                <nav className={ dialogStyle.DialogNav }>
                    <BiX onClick = {closeDialog}></BiX>
                </nav>
                <div className={ dialogStyle.DialogMessage }>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Dialog
