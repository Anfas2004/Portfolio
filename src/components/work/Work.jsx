import "./work.css"
import { motion } from "motion/react";
import retrade from '../../assets/retrade.png'

const Work = () => {
    return (
        <>
            <div className="work">
                <div className="workcontext">
                    <div className="retrade">
                        <img className="retradeimg" src={retrade} alt="project" />
                        <div className="contents">
                            <h3>ReTrade - A Sustainable Marketplace</h3>
                            <p>
                                ReTrade is a platform that promotes sustainable living by facilitating the
                                buying and selling of pre-owned items. It encourages users to give their
                                belongings a second life, reducing waste and promoting eco-friendly consumption.</p>
                        </div>
                    </div>
                    {/* <div className="sample">
                        
                    {/* </div>  */}
                </div>
            </div>
        </>
    )
}

export default Work