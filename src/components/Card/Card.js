import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ title, imageSrc, link, color}) => {
    return (
        <div className="card" style={{{
            background-color: #e4e4e4;
            display: flex;
            justify-content: space-evenly;
            height: 30vw;
            width: 20vw;
            flex-direction: column;
            border-radius: 3vw;
            padding: 5%;}}>
        <Link to={link} className="card" style={{color:`${color}`}}>
            <h2>{title}</h2>
            <img src={imageSrc} alt={title} />
            <div className="footer">
                <Link to={link}>Learn More</Link>
            </div>
        </Link>
    );
};

export default Card;
