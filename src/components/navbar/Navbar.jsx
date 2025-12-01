import "./navbar.css"
import resume from '../../assets/ANFAS.pdf'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <span>ANFAS</span>
                </div>
                <div className="navbar-links">
                    {/* <a href="#work">Services</a> */}
                    <a href={resume} target="_blank">Resume</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="navbar-status">
                    <span className="status-dot"></span>
                    <span>Open to work</span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

