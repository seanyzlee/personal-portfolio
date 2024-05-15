import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

const Home = () => {
    return(
    <div className="homeContainer">
      <Navbar/>
        <HomeContent/>
        <hr/>
        <About/>
        <hr/>
        <Footer/>
        </div>
    )
}   

export default Home;