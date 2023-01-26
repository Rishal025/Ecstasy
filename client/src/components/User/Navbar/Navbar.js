import React, { useContext, useState } from 'react'
import { Menu, Close } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import AuthContext from '../../../context/AuthProvider';

function Navbar() {
  const { auth,setAuth } = useContext(AuthContext);

  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(true);
  };

  const navigate = useNavigate()
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    axios.get('/auth/logout').then(()=>{
      setAuth([])
      navigate('/guesthome')
    })
  }


  return (
    <div className='border-b-2 border-gray flex justify-between items-center h-24 max-w-[1535px] mx-auto px-4 text-blue-900 bg-white drop-shadow-lg'>
      <div>
        <h1 className='w-full text-4xl font-bold text-blue-900 cursor-pointer' onClick={() => navigate('/')}>Ecstasy</h1>
        <p className='text-xs text-blue-700'>your way to happiness!</p>
      </div>
      {
        auth.accessToken ?

          <>
            <ul className='hidden md:flex'>
              <li className='p-4 cursor-pointer' onClick={() => navigate('/')}>Home</li>
              <li className='p-4 cursor-pointer' onClick={() => navigate('/profile')}>Profile</li>
              <li className='p-4 cursor-pointer' onClick={() => navigate('/sessions')}>Session</li>
              <li className='p-4 cursor-pointer' onClick={() => navigate('/chat')}>Chat</li>
              <li className='p-4 cursor-pointer'>Community</li>
              <li className='p-4 cursor-pointer' onClick={() => handleLogout()}><p class="cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-blue-900 border-blue-600 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-3">Logout</p></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
              {nav ? <Close size={20} /> : <Menu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-blue-500 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <h1 className='w-full text-3xl font-bold text-white m-4'>Ecstasy</h1>
              <li className='p-4 border-b border-white-600 cursor-pointer' onClick={() => navigate('/')}>Home</li>
              <li className='p-4 border-b border-white-600 cursor-pointer'onClick={() => navigate('/profile')}>Profile</li>
              <li className='p-4 border-b border-white-600 cursor-pointer'>Session</li>
              <li className='p-4 border-b border-white-600 cursor-pointer' onClick={() => navigate('/chat')}>Chat</li>
              <li className='p-4 border-b border-white-600 cursor-pointer'>Community</li>
              <li className='p-4' onClick={() => handleLogout()}><p class="cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-3">Logout</p></li>
            </ul>
          </> :

          <>
            <ul className='hidden md:flex'>
              <li className='p-4 cursor-pointer'>Home</li>
              <li className='p-4 cursor-pointer' onClick={()=>navigate('/counselor_login')}>For Counselors</li>
              <li className='p-4 cursor-pointer' onClick={() => navigate('/login')}><p class="cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-blue-900 border-blue-600 hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-3">Login/Register</p></li>    </ul>
            <div onClick={handleNav} className='block md:hidden'>
              {nav ? <Close size={20} /> : <Menu size={20} />}
            </div>
            <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-white-900 bg-blue-500 ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
              <h1 className='w-full text-3xl font-bold text-white m-4'>Ecstasy</h1>
              <li className='p-4 border-b border-white-600 cursor-pointer'>Home</li>
              <li className='p-4 border-b border-white-600 cursor-pointer'>For Counsellors</li>
              <li className='p-4' onClick={() => navigate('/login')}><p class="cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0 ml-3">Login/Register</p></li>
            </ul>
          </>
      }
    </div>
  )
}

export default Navbar