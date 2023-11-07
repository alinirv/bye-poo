import notificationStyle from './Notification.module.css'

function Notification({ children }) {
    return (
        <div className={ notificationStyle.Notification }>
            <p>{ children }</p>
        </div>
    )
}

export default Notification
