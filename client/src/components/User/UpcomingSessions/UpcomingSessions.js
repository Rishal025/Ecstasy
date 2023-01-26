import React, { useEffect, useState } from 'react'
import axios from 'axios';
import useAuth from '../../../hooks/useAuth';

function UpcomingSessions() {

  const [values, setValues] = useState([])
  const User = useAuth();
  const token = User.auth.accessToken;
  
  useEffect(() => {
    axios.get(`/user/sessions/${token}`).then((response)=>{
      setValues(response.data)
  })
  },[])

  console.log(values)

  return (

    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          {
            values.length > 0 ? 
            <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                  SI No. 
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                  Counselor 
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                   Booked Date
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                   Session Date
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                   Session Time
                </th>
                <th scope="col" className="text-md font-medium text-gray-600 px-6 py-4 text-left">
                   Handle
                </th>
              </tr>
            </thead>
            <tbody>
              {
                 values.map((element,i)=>(
                   
                   element.sessionDate > element.bookedDate &&
                   <tr className="border-b">
                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                   <td className="text-sm font-medium text-gray-900 px-6 py-4 whitespace-nowrap ">
                     Joseph Mathew
                   </td>
                   <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                     {element.bookedDate}
                   </td>
                   <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                     {element.sessionDate}
                   </td>
                   <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                     {element.timeSlot}
                   </td>
                   <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                   <button class="bg-red-900 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Cancel</button>
                   </td>
                   </tr>
                 ))
              
              }
            </tbody>
          </table>: 
         <div>
            <div className='flex justify-center'>
              <p className='text-2xl font-semibold'>You don't have any upcoming sessions</p>
           </div>
           <div className='flex justify-center mt-5'>
              <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Book Session</button>
           </div>
         </div>
          }
        </div>
      </div>
    </div>
  </div>

  )
}

export default UpcomingSessions