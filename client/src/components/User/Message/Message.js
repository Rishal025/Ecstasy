import React from 'react'
import './Message.css'
import {format} from 'timeago.js'

function Message(props) {
  console.log('props');
  console.log(props);
  return (
    <div className={ props.own? "message own" : "message" }>
        <div className="messageTop">
            <img className='messageImg' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" />
            <p className='messageTxt'>{props.messages.text}</p>
        </div>
        <div className="messageBottom">{format(props.messages.createdAt)}</div>
    </div>
  )
}

export default Message