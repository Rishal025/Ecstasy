import React from 'react'
import Home from '../../components/User/Home/Home'
import Navbar from '../../components/User/Navbar/Navbar'
import UserDailyUpdate from '../../components/User/UserDailyUpdate/UserDailyUpdate'
import Counselors from '../../components/Counselor/Couselors/Couselors'
import Services from '../../components/User/Services/Services'
import Specs from '../../components/Admin/Specializations/Specs'
import Achievments from '../../components/User/Achievements/Achievments'
import Footer from '../../components/User/Footer/Footer'

function HomePage() {
  return (
    <>
    <Navbar/>
    <Home/>
    <UserDailyUpdate/>
    <Counselors/>
    <Services/>
    <Specs/>
    <Achievments/>
    <Footer/>
    </>
  )
}

export default HomePage