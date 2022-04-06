import React from 'react'
import './message.scss'
function MessageUI({message, status}) {
    return (
        <div className={[status, 'test'].join(' ')}>
           {message} 
        </div>
    )
}

export default MessageUI
