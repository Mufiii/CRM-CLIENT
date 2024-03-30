import React from 'react'
import SideBar from './utils/SideBar'
import Navbar from './utils/Navbar'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      {/* <Navbar />
      <SideBar /> */}
      <Outlet />
    </div>
  )
}

export default Home