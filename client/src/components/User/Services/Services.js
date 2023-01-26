import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

function Services() {
  return (
    <div className='w-full my-14'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='text-center'>
        <h1 className='text text-4xl w-96 mx-auto leading-normal font-bold mb-5'>Our Sessions</h1>
          <p className='text-2xl mb-5 text-gray-500'>You can talk with our counselors according to your convenience</p>
        </div>

        <div className='grid md:grid-cols-3 gap-1 px-2 text-center'>
          <div className='border py-8 rounded-xl  shadow-xl hover:bg-zinc-300 cursor-pointer duration-700'>
            <ChatIcon/>
            <p className='text-4xl font-bold text-blue-900'>Chat Session</p>
            <p className='text-gray-400 mt-2'></p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl hover:bg-zinc-300 cursor-pointer duration-700'>
            <VideoCallIcon/>
            <p className='text-4xl font-bold text-blue-900'>Video Session</p>
            <p className='text-gray-400 mt-2'>can be more open</p>
          </div>
          <div className='border py-8 rounded-xl shadow-xl hover:bg-zinc-300 cursor-pointer duration-700'>
            <KeyboardVoiceIcon/>
            <p className='text-4xl font-bold text-blue-900'>Audio Session</p>
            <p className='text-gray-400 mt-2'>make things easier</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services