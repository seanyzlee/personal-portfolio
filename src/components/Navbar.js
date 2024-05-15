import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <div className="logos-container">
                <a href="https://github.com/seanyzlee" target="_blank"><img src="../assets/github-log.png"/></a>
                <a href="https://www.linkedin.com/in/seanyzlee/" target="_blank"><img src="../assets/linkedin-logo.png"/></a>
                </div>
            <ul>
                <li><Link to='/' className="links"><h1>Home 🏠</h1></Link></li>
               
                <li> <a href="../assets/SEANYZLEE_RESUME.pdf" download><h1>Resume 📝</h1></a></li>
        
            </ul>
          
            </div>
        </header>
    )
}
export default Navbar