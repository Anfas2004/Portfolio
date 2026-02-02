import "./work.css"
import { motion } from "motion/react";
import retrade from '../../assets/retrade.png'
import evento from '../../assets/evento.png'

const Work = () => {
    return (
        <>
            <div className="work">
                <div className="workcontext">

                    <div className="retrade">
                        <img className="retradeimg" src={evento} alt="project" />
                        <div className="contents">
                            <h3>Evento - College Event Management System</h3>
                            <p>
                                Evento is a college event management project designed to simplify
                                the planning and organization of events. It helps manage event details,
                                registrations, schedules, and participant information in one place, making
                                coordination easier for organizers and providing a smooth experience for attendees.</p>
                        </div>
                    </div>

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

                </div>
            </div>
        </>
    )
}

export default Work