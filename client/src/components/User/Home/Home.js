import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../../context/AuthProvider'
import useRefresh from '../../../hooks/useRefresh';

function Home() {
  console.log('homme')
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate()
  const refresh = useRefresh()
  return (
    <React.Fragment>
       <div className='w-full h-screen bg-white flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <h1 className='py-3 text-5xl md:text-7xl font-bold'>Mental health,</h1>
                <p className='text-4xl mt-5 font-semibold text-zinc-700'>it's not a destination</p>
                <p className='text-4xl mt-3 text-zinc-700 font-semibold'>But a process</p>
                <button onClick={()=>navigate('/signup')} className='py-3 px-6 sm:w-[60%] my-4 text-white mt-4 bg-orange-600 hover:bg-orange-700 rounded-md'>Book your slots now</button>
            </div>
            <div>
              <img className='w-11/12' src="https://images.squarespace-cdn.com/content/v1/569398c29cadb61a0a1c632c/1586731980917-OHOK7LERGVCG99ZJUFRL/TWC_Online-Therapy_couples.png" alt="/"/>
            </div>
        </div>
    </div>    
    </React.Fragment>
  )
}

export default Home