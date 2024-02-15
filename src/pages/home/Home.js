import React from 'react';
import { keyframes } from "@emotion/react";
import { Fade } from "react-awesome-reveal";
import './Home.css';
import pfp from '../../images/pfp.jpg';
import SectionCard from '../../components/SectionCard/SectionCard.js';

// icon imports
import { FaGitAlt } from "react-icons/fa";
import { IoSchoolSharp } from "react-icons/io5";
import { HiClipboardDocumentList } from "react-icons/hi2";
import { MdOutlineSportsHandball } from "react-icons/md";
import { IoIosContact } from "react-icons/io";


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
            title: 'Education',
            icon: <IoSchoolSharp size='30%' color='bdefff'/>,
            link: '/education', 
            text: "View my academic history, studies at Dartmouth, and some of my favorite courses that I've taken."
        },
        {
            title: 'Experience',
            icon: <HiClipboardDocumentList size='30%' color='#e6bdff'/>,
            link: '/experience', 
            text: "Some details about my work experience and internships."
        },
        {
            title: 'Projects',
            icon: <FaGitAlt size='25%' color='#fff875'/>, 
            link: '/projects', 
            text: "Explore some of the main projects i've worked on, including both personal and school projects."
        },
        {
            title: 'Hobbies',
            icon: <MdOutlineSportsHandball size='30%' color='#86ff9c'/>,
            link: '/hobbies', 
            text: "Take a look at what I do in my free time and on campus at Dartmouth."
        },
        {
            title: 'Contact',
            icon: <IoIosContact size='30%' color='#ff9b9b'/>,
            link: '/contact',
            text: "View my academic history, studies at Dartmouth, and some of my favorite courses that I've taken"
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
            <div className='home-border'></div>
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
            <div className='home-border'></div>
            <div className='home-sections-container'> 
                <div className='home-sections-title'>
                    <h2>Explore</h2>
                </div>
                <div className='section-card-container'>
                    <ul className='sections-card-list'>
                        {cards.map((sectionCard, index) => (
                            <li className='card-li' key={index}>
                                <SectionCard
                                    title={sectionCard.title}
                                    icon={sectionCard.icon}
                                    link={sectionCard.link}
                                    text={sectionCard.text}
                                    headerColor={'black'}
                                    bodyColor={'black'}
                                    cardStyle={{backgroundColor:'#e9e9e9', height:'40vw', width:'30vw'}}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;
