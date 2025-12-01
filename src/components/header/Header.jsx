import "./header.css"
// import header from '../../assets/header.png'
// import header2 from '../../assets/header2.jpeg'
import header3 from '../../assets/header3.jpg'
import { motion } from "motion/react";

const Header = () => {
    return (
        <>
            <div className="hero-section">
                <div className="hero-content">
                    <div className="hero-left">
                        <h1 className="hero-name">
                            <span>ANFAS</span>
                            <span>TA</span>
                        </h1>
                        <p className="hero-intro">
                            A budding Developer & Designer shaping digital experiences.
                        </p>
                    </div>
                    <div className="hero-right">
                        <div className="hero-image-wrapper">
                            <img src={header3} alt="Anfas TA" className="hero-image" />
                            <div className="image-vignette"></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;
