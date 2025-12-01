import "./contact.css"
import { motion } from "motion/react";


const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="contactcontext">
                    <div className="address">
                        <div className="phone">
                            <h4>Phone:</h4>

                            <p>+91 8921360670</p>
                        </div>
                        <div className="email">
                            <h4>Email:</h4>
                            <p>anfastashkar@gmail.com</p>
                        </div>
                    </div>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/anfasta/">
                            <motion.i whileHover={{ scale: 1.4}}
                                whileTap={{ scale: 0.95 }} class="fa-brands fa-linkedin">
                            </motion.i>
                        </a>
                        <a href="https://www.instagram.com/anfas__ta/">
                            <motion.i whileHover={{ scale: 1.4 }}
                                whileTap={{ scale: 0.95 }} class="fa-brands fa-instagram">
                            </motion.i>
                        </a>
                        <a href="https://github.com/anfasta">
                            <motion.i whileHover={{ scale: 1.4 }}
                                whileTap={{ scale: 0.95 }} class="fa-brands fa-github">
                            </motion.i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact