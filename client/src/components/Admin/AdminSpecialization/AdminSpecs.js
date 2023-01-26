import React from 'react'
import AddSpecs from '../AddSpecs/AddSpecs';
import ViewSpecs from '../ViewSpecs/ViewSpecs';
// import Viewspecs from '../../../components/Admin/viewspecs/Viewspecs';
// import Addspecs from '../../../components/Admin/addspecs/Addspecs';


function AdminSpecs() {

 
  const [openTab, setOpenTab] = React.useState(1);
  const color = "blue"

  return (

    <div>
      <div className="flex flex-wrap mx-auto">
        <div className="w-[1200px]">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-blue-900"
                    : "text-black")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                View Specializations
              </a>
            </li>
            
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-blue-900"
                    : "text-black")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                 Add Specializations
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <ViewSpecs/>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link3">
                  <AddSpecs/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default AdminSpecs