import React from 'react';
import { Fade } from "react-awesome-reveal";
import './Card.css';

const SectionCard = ({ header, body, backgroundColor, headerColor, bodyColor }) => {
    return (
        <div className="text-card" style={{backgroundColor: `${backgroundColor}`}}>
            <Fade triggerOnce fraction={0.5} duration={2000}>
                <h2 style={{color: `${headerColor}`}}>{header}</h2>
                <div className="text-card-body">
                    <p> {body} </p>
                </div>
            </Fade>
        </div>
    );
};

export default SectionCard;
