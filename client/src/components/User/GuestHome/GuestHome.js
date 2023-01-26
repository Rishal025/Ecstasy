import React from 'react'
import { useNavigate } from 'react-router-dom'

function GuestHome() {

  console.log('guest home');
  const navigate = useNavigate()
  return (
    <React.Fragment>
        <div className='w-full h-screen bg-zinc-100 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Talk with our Counselors</h1>
                <p className='text-2xl mt-5 text-zinc-700'>Online counselling with top psychologists in the world</p>
                <p className='text-2xl mt-3 text-zinc-700'>Any time, Any where, Any device</p>
                <button onClick={()=>navigate('/signup')} className='py-3 px-6 sm:w-[60%] my-4 text-white mt-4 bg-blue-900 hover:bg-indigo-500 rounded-md'>Get Started</button>
            </div>
            <div>
              <img className='w-11/12' src="https://www.seekpng.com/png/detail/850-8508731_health-transparent-illustration-mental-health-disorder.png" alt="/"/>
            </div>
        </div>
    </div>                
    </React.Fragment>
  )
}

export default GuestHome