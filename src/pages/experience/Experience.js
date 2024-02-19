import React from 'react';
import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import './Experience.css';

// icon imports 
import { IoIosMusicalNote } from "react-icons/io";
import { RiRobot2Fill } from "react-icons/ri";
import { FaHeadphonesAlt } from "react-icons/fa";


const Experience = () => {

    return (
        <div>
            <div className='intro-container'>
                <Fade triggerOnce fraction={0.5} duration={1000}>
                    <div className='intro-container-text'>
                        <h1>Experience & Projects</h1>
                        <h2>Some of my work experience in tech and my favorite personal and school coding projects.</h2>
                    </div>
                </Fade>
            </div>
            <div className='experience-container'>
                <div className='border'></div>
                <div className='experience-header'>
                    <Fade triggerOnce fraction={1} duration={1000}>
                        <h1>Work</h1>
                    </Fade>
                </div>
                <div className='docunlock-container'>
                    <div className='docunlock-content'>
                        <Fade triggerOnce fraction={0.5} duration={1000}>
                            <div className='docunlock-card'>
                                <div className='docunlock-text'>
                                    <h1> <a href='https://docunlock.ai/' target='blank' style={{color: '#5f42ff', textDecoration: 'none'}}>DocUnlock Ai </a>- Software Engineer Intern</h1>
                                    <h3>November 2023 - Present</h3>
                                    <p>DocUnlock is a small startup based out of San Francisco, California, that uses Ai to automate document processing for customs clearance. I've worked here for a little over two months now, primarily helping to identify and adress areas for improvement in our system, in addition to supporting clients' individual needs.</p>
                                </div>
                                <div className='docunlock-logo'>
                                    <img src="https://images.crunchbase.com/image/upload/c_pad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/poiivj4qq78cssne1wek" alt="docunlock logo"></img>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='projects-container'>
                <Fade triggerOnce fraction={1} duration={1000}>
                <div className='projects-header'>
                    <h1>Projects</h1>
                </div>
                </Fade>
                <div className='projects-content'>
                    <div className='project-card-container'>
                        <Link to='https://github.com/brendanshaw14/Chord-Predictor/blob/main/final.ipynb' target="_blank" className="project-link">
                            <div className='project-card'>
                                <h1>Chord Predictor ML Model</h1>
                                <div className='icon-container'>
                                    <IoIosMusicalNote size={100} color={'#5f42ff'}/>
                                </div>
                                <p>For my COSC 89 (Data Mining and Knowledge Discovery) final project, I designed, trained, and tested a machine learning model to take input audio features from a song and output the chords being played at change points in the song. </p>
                            </div>
                        </Link>
                    </div>
                    <div className='project-card-container'>
                        <Link to='https://github.com/brendanshaw14/CS-76-Projects' target="_blank" className="project-link">
                            <div className='project-card'>
                                <h1>Artificial Intelligence Portfolio</h1>
                                <div className='icon-container'>
                                    <RiRobot2Fill size={100} color={'#00ffbf'}/>
                                </div>
                                <p>Throughout my COSC 76 (Artificial Intelligence) class, I completed a series of projects that implement fundamental concepts in artificial intelligence to solve different problems. This repo contains all of the projects, each of which includes an in-depth explanation and documentation. </p>
                            </div>
                        </Link>
                    </div>
                    <div className='project-card-container'>
                        <Link to='https://github.com/brendanshaw14/circlefy' target="_blank" className="project-link">
                            <div className='project-card'>
                                <h1>Circlefy Web App</h1>
                                <div className='icon-container'>
                                    <FaHeadphonesAlt size={100} color={'#ff00d4'}/>
                                </div>
                                <p>This is a personal project that I did to teach myself web development by displaying users' Spotify data in a visually appealing format. The website uses OAuth 2.0 and Spotify's playback SDK to play users' songs within the site, but can't be published becuase of Spotify's art cropping policy. See the ReadMe for more info. </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
 
        </div>
    );
};

export default Experience;
