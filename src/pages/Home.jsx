import ContDashboard from "../Components/ContDashboard";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";

const Home = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="right">
        <Navbar />
        <ContDashboard />
        <Footer />
      </div>  
    </div>
  )
}

export default Home