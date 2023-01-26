import React from 'react'
import Navbar from '../../components/User/Navbar/Navbar'
import UserProfile from '../../components/User/UserProfile/UserProfile'

function UserProfilePage() {
  return (
    <React.Fragment>
        <Navbar/>
        <UserProfile/>
    </React.Fragment>
  )
}

export default UserProfilePage