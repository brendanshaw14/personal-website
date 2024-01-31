import React from 'react';
import { keyframes } from "@emotion/react";
import { Fade, Slide } from "react-awesome-reveal";
import './Home.css';
import pfp from '../../images/pfp.jpg';

const Home = () => {
    const slideUp = keyframes`
        from {
            transform: translateY(10%);
        }
        to {
            transform: translateY(0);
        }
    `;
    return (
        <div className="Home">
            <div className='name-container'>
                <Fade cascade damping={.1}> 
                    <div className='name-text'>
                        <h1>Hi. I'm Brendan.</h1>
                    </div>
                    <div className='name-subtext'>
                        <p>Welcome to my personal website. I've taken some time to write down a few things about myself here. Enjoy. </p>
                    </div>
                </Fade>
            </div>
            <div className='about-me-container'>
                <img
                    src={pfp}
                    alt="Profile"
                    className="profile-photo" // Apply a CSS class for styling
                />
                <div className='about-me-text-container'>
                    <Fade keyframes={slideUp} fraction={0.3} duration={1000}>
                            <h2>About Me</h2>
                            <p>
                                I'm a software developer and a student at Dartmouth College. I'm passionate about  I'm interested in full-stack web development, mobile development, and machine learning. I'm also interested in the intersection of technology and society, and how technology can be used to solve social problems. I'm currently looking for internships for Summer 2022.
                            </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Home;
