import messageStyle from './Message.module.css'

function Message({ message }) {
    if (message.type === 'text')
        return <p className={ messageStyle.TextMessage }>{ message.message }</p>
    return <img src={ message.message } alt="" className={ messageStyle.ImageMessage } />
}

export default Message
