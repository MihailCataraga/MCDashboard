import ContTables from "../Components/ContTables"
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"


const Tables = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Navbar />
        <ContTables />
        <Footer />
      </div>  
    </div>
  )
}

export default Tables