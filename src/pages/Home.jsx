//git add .
//git commit -m
//git push origin main 


import About from "../components/about/About"
import Beyond from "../components/beyondwork/Beyond"
import Contact from "../components/contact/Contact"
import Header from "../components/header/Header"
import Work from "../components/work/Work"
import Navbar from "../components/navbar/Navbar"
import "./home.css"

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="main">
                <Header />
                <div className="heading">
                    <h3>Personal Projects</h3>
                </div>
                <Work />
                <div className="heading">
                    <h3>About Me</h3>
                </div>
                <About />
                <div className="heading">
                    <h3>Beyond work</h3>
                </div>
                <Beyond />
                <div className="heading" id="contact">
                    <h3>Contact Me</h3>
                </div>
                <Contact />
            </div>
        </>
    )
}

export default Home