import React, { useState } from 'react'
import GridViewIcon from '@mui/icons-material/GridView';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Person3Icon from '@mui/icons-material/Person3';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import { useNavigate } from 'react-router-dom';
import ChatIcon from '@mui/icons-material/Chat';
import useAuthCounselor from '../../../hooks/useAuthCounselor';


function CounselorHome(props) {

  const counselor = useAuthCounselor();

  const [open, setOpen] = useState(true);
  const [current, setCurrent] = useState(true);
  const navigate = useNavigate();
 
  const Menus = [
    { title: "Dashboard", navigate: '/counselor', src:GridViewIcon},
    { title: "Profile", navigate: '/counselor/profile', src:Person3Icon},
    { title: "Session", src:PeopleAltIcon},
    { title: "Chat", navigate : '/counselor/chat' ,  src:ChatIcon},
  ]

  return (
    <div className='flex h-screen'>
    <div className={`${open ? "w-72" : "w-20"} duration-500 h-screen p-5 pt-8 bg-gray-300 relative`}>
    <img src="https://aux.iconspalace.com/uploads/arrow-left-icon-256-1421005080.png" alt="" className={`absolute cursor-pointer rounded-full
    -right-3 top-9 w-7 border-2 ${!open && 'rotate-180'}`} onClick={()=>setOpen(!open)}/>

    <div className='flex gap-x-4 items-center'>
      {
        open ?  <h1 className={`text-blue-800 origin-left font-bold text-4xl duration-300`}>Ecstasy <br /><p className='font-medium mt-2 text-center text-sm'>Counselor Page</p></h1>:
        <h1 className={`text-blue-800 origin-left font-medium text-xl duration-300`}>E</h1>
      }
    </div>
    <div className='pt-6'>
       {
        Menus.map((menu,index)=>(
           <div key={index} className={`text-gray-700 text-lg font-semibold flex items-center
           gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md mt-5`} onClick={()=>navigate(menu.navigate)}>
          
           <div>{React.createElement(menu.src, {size:"20"})}</div>
           <h2 className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</h2>
          </div>
        ))
       }
    </div>
    </div>
    <div className='p-7 text-2xl font-semibold w-full'>
        {props.value}      
    </div>
</div>
  )
}

export default CounselorHome