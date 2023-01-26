import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CounselorReq() {

    const navigate = useNavigate()
    const [allCounselors, setAllCounselors] = useState([])
    const [boolean, setBoolean] = useState(false)

    useEffect(() => {
        console.log('hii');
        axios.get('/admin/counselor_req').then((response) => {
          console.log(response)
          setAllCounselors(response.data.data)
          console.log('heiii');
          console.log(response.data.data)
        })
      },[boolean])

      const viewMore = (id) =>{
        console.log(id)
        navigate(`/admin/counselor_details/${id}`)
      }
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
                  Counselor Name
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                  Qualification
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                   Experience
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                   Status
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                   Handle
                </th>
              </tr>
            </thead>
            <tbody>
              {
                allCounselors.map((element,i)=>(
                  <tr className="border-b" key={element._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                   {element.fullname}
                  </td>
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                    {element.qualification}
                  </td>
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                    {element.experience}
                  </td>
                    {
                      element.status == 'rejected'? 
                      <td className="text-sm text-red-700 px-6 py-4 whitespace-nowrap">
                      {element.status}
                    </td>:
                     <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                     {element.status}
                   </td>
   
                 }
                    
                  <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>viewMore(element._id)}>View More</button>
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

  )
}

export default CounselorReq