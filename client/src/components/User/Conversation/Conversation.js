import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Conversation.css';

function Conversation({ conversation, currentUser, counselor }) {
  console.log('props');
  console.log(conversation);
  console.log(currentUser);
  console.log('hello'+counselor);
  const [user, setUser] = useState();

  useEffect(() => {
    const counselorId =conversation.members.find((m) => m !== currentUser);

    console.log('friendId');
    console.log(counselorId);

    const getUser = async () => {
      try {
        if(counselor) {
          const res = await axios.get(`/conversation/chat-user/${counselorId}`);
          console.log(res);
          setUser(res.data);
        } else{
          const res = await axios.get(`/conversation/chat-counselor/${counselorId}`);
          console.log(res);
          setUser(res.data);
        }
        
      } catch (err) {
        console.log('err');
        console.log(err);
      }
    }
    getUser();
  },[])
  return (
    <div className='conversation'>
        <div className='chatOnlineImgContainer'>
            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" className='conversationImg'/>
            <div className='chatOnlineBadge'></div>
        </div>
        {
          user && <span className='conversationName ml-12'>{counselor ? user.username : user.fullname}</span>
        }
    </div>
  )
}

export default Conversation;