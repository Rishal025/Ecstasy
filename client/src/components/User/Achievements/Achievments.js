import React from 'react'

function Achievments() {
  return (
    <div className='w-full my-14'>
    <div className='max-w-[1240px] mx-auto'>
      <div className='text-center'>
      <h1 className='text text-4xl w-96 mx-auto leading-normal font-bold mb-5'>Our Achievements</h1>
        <p className='text-2xl mb-5 text-gray-500'>We have achieved a plenty amount of satisfied customers and experienced counselors</p>
      </div>

      <div className='grid md:grid-cols-4 gap-1 px-2 text-center'>
        <div className='border py-8 rounded-xl bg-black shadow-xl hover:bg-zinc-300 duration-700'>
          {/* <ChatIcon/> */}
          <p className='text-4xl font-bold text-white'>20000+</p>
          <p className='text-gray-400 mt-2'>Happy customers</p>
        </div>
        <div className='border py-8 rounded-xl shadow-xl bg-black hover:bg-zinc-300 duration-700'>
          {/* <VideoCallIcon/> */}
          <p className='text-4xl font-bold text-white'>2000+</p>
          <p className='text-gray-400 mt-2'>Active Counselors</p>
        </div>
        <div className='border py-8 rounded-xl shadow-xl bg-black hover:bg-zinc-300 duration-700'>
          {/* <KeyboardVoiceIcon/> */}
          <p className='text-4xl font-bold text-white'>20+</p>
          <p className='text-gray-400 mt-2'>Specializations</p>
        </div>
        <div className='border py-8 rounded-xl shadow-xl bg-black hover:bg-zinc-300 duration-700'>
          {/* <KeyboardVoiceIcon/> */}
          <p className='text-4xl font-bold text-white'>20+</p>
          <p className='text-gray-400 mt-2'>Specializations</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Achievments