import { motion } from "motion/react"
import "./beyond.css"
import snapping from '../../assets/snapping.jpg'
import driving from '../../assets/driving.jpg'
import musics from '../../assets/musics.jpg'

const Beyond = () => {
    return (
        <>
            <div className="beyond">
                <div className="beyondcontext">
                    <div className="beyonditem">
                        <motion.img whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }} src={driving} alt="Driving" />
                        <p>Driving</p>
                    </div>
                    <div className="beyonditem">
                        <motion.img whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }} src={musics} alt="Music" />
                        <p>Musics</p>
                    </div>
                    <div className="beyonditem">
                        <motion.img whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.95 }} src={snapping} alt="Travel" />
                        <p>Snapping</p>
                    </div>
                </div>
            </div></>
    )
}

export default Beyond