import React from 'react'
import GuestHome from '../../components/User/GuestHome/GuestHome'
import Navbar from '../../components/User/Navbar/Navbar'
import Counselors from '../../components/Counselor/Couselors/Couselors'
import Services from '../../components/User/Services/Services'
import Specs from '../../components/Admin/Specializations/Specs'
import Achievments from '../../components/User/Achievements/Achievments'
import Footer from '../../components/User/Footer/Footer'

function GuestHomePage() {
  return (
    <React.Fragment>
        <Navbar/>
        <GuestHome/>
        <Counselors/>
        <Services/>
        <Specs/>
        <Achievments/>
        <Footer/>
    </React.Fragment>
  )
}

export default GuestHomePage