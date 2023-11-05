import dialogStyle from './Dialog.module.css'

function Dialog({ children, isActive }) {
    if (!isActive) return <></>
    return (
        <div className={ dialogStyle.DialogBackground }>
            <div className={ dialogStyle.Dialog }>
                <nav className={ dialogStyle.DialogNav }>
                    <button>Sair</button>
                </nav>
                <div className={ dialogStyle.DialogMessage }>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default Dialog
