import React from 'react'
import { useNavigate } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

function Footer() {
    const navigate = useNavigate()
  return (
    <div className='w-full mt-24 bg-blue-900 text-gray-300 py-y px-2'>
        <div className='max-w-[1240] mx-auto grid md:grid-cols-6 border-b-2 border-gray-600 py-8'>
            <div>
            <h1 className='w-full text-4xl font-bold text-white cursor-pointer' onClick={() => navigate('/')}>Ecstasy</h1>
            <p className='text-xs text-slate-200'>your way to happiness!</p>
            </div>
            <div>
                <h6 className='font-bold uppercase pt-2'>services</h6>
                <ul>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>services</h6>
                <ul>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                </ul>
            </div>

            <div>
                <h6 className='font-bold uppercase pt-2'>services</h6>
                <ul>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                    <li className='py-1'>servicing</li>
                </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-bold uppercase'>How can we help you?</p>
                <form className='flex flex-col sm:flex-row' action="">
                    <input className='w-full p-2 mr-4 rounded-md mb-4' placeholder='give us your mobile number' type="tel"/>
                    <button className='p-2 mb-4 bg-orange-600 text-white text-center rounded-lg'>get call</button>
                </form>
            </div>
        </div>

        <div className='flex flex-col max-w-[1240] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-400'>
            <p className='py-4'>Make your life easy and better with Ecstasy.com</p>
            <p className='py-4'>2022 Ecstasy. All rights reserved</p>
            <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
              <FacebookIcon/>
              <InstagramIcon/>
              <TwitterIcon/>
            </div>
        </div>
    </div>
  )
}

export default Footer