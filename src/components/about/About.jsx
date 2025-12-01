import "./about.css"
import about from '../../assets/about.jpg'
import { motion } from "motion/react"


const About = () => {
    return (
        <>
            <div className="about">
                <div className="aboutphoto">
                    <motion.img whileHover={{ scale: 0.99 }}
                        whileTap={{ scale: 0.95 }} src={about} alt="lol" />
                </div>
                <div className="aboutcontext">
                    <p>
                        My journey as a developer began in college, where curiosity evolved into passion. From coding
                        sessions to building small projects with friends, I discovered how creativity and logic come
                        together in development. I enjoy exploring new frameworks, solving problems, and transforming
                        ideas into interactive digital experiences.
                    </p>
                </div>
            </div></>
    )
}

export default About