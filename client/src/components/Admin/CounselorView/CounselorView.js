import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function CounselorView() {

    const navigate = useNavigate();
    const [allCounselors, setAllCounselors] = useState([]);
    useEffect(() => {
        const getCounselors = async () => {
            const counselors = await axios.get('/admin/all-counselors')
            setAllCounselors(counselors.data)
        }
        getCounselors();
    },[])

    console.log(allCounselors);

    const viewMore = (counselorId) => {
        console.log(counselorId);
        navigate(`/admin/counselor/view/${counselorId}`);
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
                   Email
                </th>
                <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                   Handle
                </th>
              </tr>
            </thead>
            <tbody>
                  {
                    allCounselors.map((element,i) => (
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
                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            {element.email}
                            </td>
                                
                            <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => viewMore(element._id)}>View More</button>
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

export default CounselorView