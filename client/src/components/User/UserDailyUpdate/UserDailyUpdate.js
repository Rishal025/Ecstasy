import React from 'react'

function UserDailyUpdate() {
  return (
    <div className='w-full my-14 text-center'>
         <h1 className='text text-4xl w-96 mx-auto leading-normal font-bold mb-12'>Welcome User</h1>
      <div className='max-w-[1240px] mx-auto mb-10'>
      <div className='grid md:grid-cols-2 gap-5 px-2 text-center'>
          <div className='border py-8 rounded-xl  shadow-xl bg-zinc-300 cursor-pointer duration-700'>  
            <p className='text-4xl font-bold text-blue-900'>Upcoming Sessions</p>
            <p className='text-gray-600 mt-2 text-xl'>You don't have any upcoming sessions</p>
            <button className='mt-3 bg-blue-900 hover:bg-indigo-600 py-2.5 px-8 rounded-full text-white'>Book Session</button>
          </div>
          
          <div className='border py-8 rounded-xl  shadow-xl bg-zinc-300 cursor-pointer duration-700'>  
            <p className='text-4xl font-bold text-blue-900'>My Counselors</p>
            <p className='text-gray-600 mt-2 text-xl'>You don't have any counselors</p>
            <button className='mt-3 bg-blue-900 hover:bg-indigo-600 py-2.5 px-8 rounded-full text-white'>View counselors</button>
          </div>

        </div>
      </div>
        
    </div>
  )
}

export default UserDailyUpdate