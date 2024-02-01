import React from 'react';
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import './Home.css';
import Card from '../../components/Card/Card';
import pfp from '../../images/pfp.jpg';

const Home = () => {
    const slideUp = keyframes`
        from {
            transform: translateY(20%);
        }
        to {
            transform: translateY(0);
        }
    `;

    const cards = [
        {
            title: 'Academics',
            imageSrc: 'https://via.placeholder.com/150',
            link: '/academics', 
            color: '#84ceff'
        },
        {
            title: 'Experience',
            imageSrc: 'https://via.placeholder.com/150',
            link: '/experience'
        },
        {
            title: 'Projects',
            imageSrc: 'https://via.placeholder.com/150',
            link: '/projects'
        },
        {
            title: 'Hobbies',
            imageSrc: 'https://via.placeholder.com/150',
            link: '/hobbies'
        },
        {
            title: 'Contact',
            imageSrc: 'https://via.placeholder.com/150',
            link: '/contact'
        }];
    return (
        <div className="Home">
            <div className='name-container'>
                <Fade cascade damping={.1}> 
                    <div className='name-text'>
                        <h1>Hi. I'm Brendan.</h1>
                    </div>
                    <Fade triggerOnce duration={2000} keyframes={slideUp}>
                        <div className='name-subtext'>
                            <p>Welcome to my personal website. I've taken some time to write down a few things about myself here. Enjoy. </p>
                        </div>
                    </Fade>
                </Fade>
            </div>
            <div className='about-me-container'>
                <img
                    src={pfp}
                    alt="Profile"
                    className="profile-photo" // Apply a CSS class for styling
                />
                <div className='about-me-text-container'>
                    <Fade triggerOnce keyframes={slideUp} fraction={0.5} duration={2000}>
                            <h2>About Me</h2>
                            <p>
                                I'm an aspiring software developer and a third year student at Dartmouth College. I'm from <span style={{color: '#080808'}}>Fort Worth, Texas, </span>and am currently living in <span style={{color: '#080808'}}>San Francisco, California, </span>for my off term. I'm passionate about coding, music, and sports, and I play on the Men's club volleyball team and for a student band at Dartmouth.  I'm most interested in full stack development, but also enjoy machine learning and data science.</p>
                    </Fade>
                </div>
            </div>
            <div className='home-sections-container'> 
                <div className='home-sections-title'>
                    <h2>Explore</h2>
                </div>
                <div className='card-container'>
                    <ul className='card-list'>
                        <li className='card-li'><Card title={cards[0].title} imageSrc={cards[0].imageSrc} link={cards[0].link} color={cards[0].color} /></li>
                        <li className='card-li'><Card title={cards[2].title} imageSrc={cards[2].imageSrc} link={cards[2].link} color={cards[1].color} /></li>
                        <li className='card-li'><Card title={cards[1].title} imageSrc={cards[1].imageSrc} link={cards[1].link} color={cards[2].color} /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
