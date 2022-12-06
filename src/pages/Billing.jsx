import React from 'react'
import ContBiling from '../Components/ContBiling'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'

const Biling = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Navbar />
        <ContBiling />
        <Footer />
      </div>  
    </div>
  )
}

export default Biling