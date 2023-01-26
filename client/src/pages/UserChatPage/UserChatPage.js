import React from 'react'
import Chat from '../../components/User/Chat/Chat'
import Navbar from '../../components/User/Navbar/Navbar'

function UserChatPage({value}) {

  return (
     <>
      {
       value ? <Chat/>
       :
          <>
            <Navbar/>
            <Chat/>
          </>
      }
     </>
  )
}

export default UserChatPage