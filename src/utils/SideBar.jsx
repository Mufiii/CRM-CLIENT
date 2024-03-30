// h-[calc(100vh-2rem)]

import { useNavigate } from "react-router-dom"

const SideBar = () => {

  const navigate = useNavigate()

  return (
    <div className="h-screen ">
      <div className="h-full w-full sm:max-w-[15rem] max-w-[5rem] p-4 bg-gray-800">
        <ul className="divide-y divide-gray-200">
          <li className="flex items-center p-2 hover:bg-gray-700">
            <span style={{ color: "white" }} className="font-bold">Dashboard</span>
          </li>
          <li onClick={()=> navigate('/leeds')} style={{ color: "white" }} className="flex items-center p-2 hover:bg-gray-700">
            <span className="font-bold">Leeds</span>
          </li>

          <li className="flex items-center p-2 hover:bg-gray-700">
            <span style={{ color: "white" }} className="font-bold">Settings</span>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default SideBar