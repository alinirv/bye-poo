import { useState } from 'react'
import dialogStyle from './Dialog.module.css'

function Dialog({ children, isActive, setIsActive }) {
    const closeDialog = () => setIsActive(false)

    if (!isActive)
        return <></>

    return (
        <div className={ dialogStyle.DialogBackground } onClick={ closeDialog } >
            <div className={ dialogStyle.Dialog }>
                <nav className={ dialogStyle.DialogNav }>
                    <button onClick={ closeDialog } >Sair</button>
                </nav>
                <div className={ dialogStyle.DialogMessage }>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Dialog
