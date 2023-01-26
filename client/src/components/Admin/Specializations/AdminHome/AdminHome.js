import React, { useState } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Person3Icon from '@mui/icons-material/Person3';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { useNavigate } from 'react-router-dom';
import AdminUsers from '../../AdminUsers/AdminUsers';
import AdminNavbar from '../../AdminNavbar/AdminNavbar';

function AdminHome(props) {
  const [open, setOpen] = useState(true)
  const [current, setCurrent] = useState(true)
  const navigate = useNavigate()

  const Menus = [
    { title: "Dashboard", navigate : '/admin', src:GridViewIcon},
    { title: "Users", navigate: '/admin_users', src:PeopleAltIcon},
    { title: "Counselors",navigate: '/admin_counselor', src:Person3Icon},
    { title: "Counselor requests", navigate : '/admin_counselor_req' ,  src:HourglassTopIcon},
    { title: "Specializations",navigate : "/admin_specs", src:MedicalInformationIcon},
    { title: "Appointments", src:BookOnlineIcon},
    { title: "User plans", src:RequestQuoteIcon}
  ]
  return (
    <div className='flex'>
    <div className={`duration-500 h-screen p-5 pt-8 bg-blue-900 relative`}>

    <div className='flex gap-x-4 items-center'>
      {
        open ?  <h1 className={`text-white origin-left font-medium text-4xl duration-300`}>Ecstasy <br /></h1>:
        <h1 className={`text-white origin-left font-medium text-xl duration-300`}>E</h1>
      }
    </div>
    <div className='pt-6'>
       {
        Menus.map((menu,index)=>(
           <div key={index} className={`text-gray-300 text-lg font-semibold flex items-center
           gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-5`} onClick={()=>navigate(menu.navigate)}>
          
           <div>{React.createElement(menu.src, {size:"20"})}</div>
           <h2 className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</h2>
          </div>
        ))
       }
    </div>
    </div>
    <div className='p-7 text-2xl font-semibold w-full'>
        <AdminNavbar/>
        {props.value}      
    </div>
</div>
  )
}

export default AdminHome




