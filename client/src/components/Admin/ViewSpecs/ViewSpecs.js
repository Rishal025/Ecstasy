import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';

function ViewSpecs() {

  const [allSpecs, setAllSpecs] = useState([])
  const [boolean, setBoolean] = useState(false)

  useEffect(() => {
    console.log('hii');
    axios.get('/admin/view_specs').then((response) => {
      console.log(response)
      setAllSpecs(response.data.data)
      console.log(response.data.data)
      setBoolean(false)
    })
  },[boolean])

  const deleteSpec = (id) =>{
    console.log(id)
    axios.delete(`/admin/delete_specs/${id}`).then(()=>{
       setBoolean(true)
       console.log('deleted successfully')
    })
  }
  console.log('hello')
  console.log(allSpecs)
  return (
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="border-b">
              <tr>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  SI.No
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Specialization
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Logo
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Handle
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allSpecs.map((element,i)=>(
                  <tr className="border-b" key={element._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                   {element.specs}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {element.specs}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button>
                  <button class="bg-red-700 hover:bg-red-500 text-white font-bold py-2 ml-2 px-4 rounded" onClick={()=>deleteSpec(element._id)}>Delete</button>
                  </td>
                </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>



  // <div className="flex flex-col">
  //           <div className="overflow-x-auto">
  //               <div className="p-1.5 w-full inline-block align-middle">
  //                   <div className="overflow-hidden border rounded-lg">
  //                       <table className="min-w-full divide-y divide-gray-200">
  //                           <thead className="bg-gray-50">
  //                               <tr>
  //                                   <th
  //                                       scope="col"
  //                                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
  //                                   >
  //                                       ID
  //                                   </th>
  //                                   <th
  //                                       scope="col"
  //                                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
  //                                   >
  //                                       Name
  //                                   </th>
  //                                   <th
  //                                       scope="col"
  //                                       className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
  //                                   >
  //                                       Email
  //                                   </th>
  //                                   <th
  //                                       scope="col"
  //                                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
  //                                   >
  //                                       Edit
  //                                   </th>
  //                                   <th
  //                                       scope="col"
  //                                       className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
  //                                   >
  //                                       Delete
  //                                   </th>
  //                               </tr>
  //                           </thead>
  //                           <tbody className="divide-y divide-gray-200">
  //                               <tr>
  //                                   <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
  //                                       1
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //                                       Jone Doe
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //                                       jonne62@gmail.com
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
  //                                       <a
  //                                           className="text-green-500 hover:text-green-700"
  //                                           href="#"
  //                                       >
  //                                           Edit
  //                                       </a>
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
  //                                       <a
  //                                           className="text-red-500 hover:text-red-700"
  //                                           href="#"
  //                                       >
  //                                           Delete
  //                                       </a>
  //                                   </td>
  //                               </tr>
  //                               <tr>
  //                                   <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
  //                                       2
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //                                       Jone Doe
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //                                       jonne62@gmail.com
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
  //                                       <a
  //                                           className="text-green-500 hover:text-green-700"
  //                                           href="#"
  //                                       >
  //                                           Edit
  //                                       </a>
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
  //                                       <a
  //                                           className="text-red-500 hover:text-red-700"
  //                                           href="#"
  //                                       >
  //                                           Delete
  //                                       </a>
  //                                   </td>
  //                               </tr>
  //                               <tr>
  //                                   <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
  //                                       3
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //                                       Jone Doe
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
  //                                       jonne62@gmail.com
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
  //                                       <a
  //                                           className="text-green-500 hover:text-green-700"
  //                                           href="#"
  //                                       >
  //                                           Edit
  //                                       </a>
  //                                   </td>
  //                                   <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
  //                                       <a
  //                                           className="text-red-500 hover:text-red-700"
  //                                           href="#"
  //                                       >
  //                                           Delete
  //                                       </a>
  //                                   </td>
  //                               </tr>
  //                           </tbody>
  //                       </table>
  //                   </div>
  //               </div>
  //           </div>
  //       </div>
  )
}

export default ViewSpecs