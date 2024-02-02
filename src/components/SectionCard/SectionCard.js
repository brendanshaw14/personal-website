import React from 'react';
import { Fade } from "react-awesome-reveal";
import { Link } from 'react-router-dom';
import './SectionCard.css';

const SectionCard = ({ title, icon, link, text, headerColor, bodyColor, cardStyle}) => {

    return (
        <Link to={link} className="section-card-link">
            <div className="section-card" style={cardStyle}>
                <Fade triggerOnce fraction={0.5} duration={2000}>
                    <h2 style={{color: `${headerColor}`}}>{title}</h2>
                    <div className='icon-conatiner'>{icon}</div>
                    <div className="footer">
                        <p style={{color: `${bodyColor}`}}> {text} </p>
                    </div>
                </Fade>
            </div>
        </Link>
    );
};

export default SectionCard;
