import React from 'react'
import ContSettings from '../Components/ContSettings'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Settings = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Navbar />
        <ContSettings />
        <Footer />
      </div>  
    </div>
  )
}

export default Settings