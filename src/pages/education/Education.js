import React from 'react';
import './Education.css';
import { Fade } from 'react-awesome-reveal';
import SectionCard from '../../components/SectionCard/SectionCard.js';

const Education = () => {

    const cards = [
    {
        title: 'COSC 1',
        link: 'https://dartmouth.smartcatalogiq.com/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-1/', 
        color: '#bdefff', 
        text: "Introduction to Programming and Computation"
    }, 
    {
        title: 'COSC 10',
        link: "https://dartmouth.smartcatalogiq.com/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-10/", 
        color: '#bdefff', 
        text: "Problem Solving via Object-Oriented Programming"
    }, 
    {
        title: 'COSC 30',
        link: 'https://dartmouth.smartcatalogiq.com/en/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-30/', 
        color: '#bdefff', 
        text: "Discrete Mathematics in Computer Science"
    }, 
    {
        title: 'COSC 50',
        link: 'https://dartmouth.smartcatalogiq.com/en/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-50/', 
        color: '#bdefff', 
        text: "Software Design and Implementation"
    }, 
    {
        title: 'COSC 76',
        link: 'https://dartmouth.smartcatalogiq.com/en/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-76/', 
        color: '#bdefff', 
        text: "Artificial Intelligence"
    }, 
    {
        title: 'CS 89.21',
        link: 'https://dartmouth.smartcatalogiq.com/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-89-21/', 
        color: '#bdefff', 
        text: "Data Mining and Knowledge Discovery"
    }
    ];

    return (
        <div>
            <div className='header-container'>
                <div className='header-text-container'>
                    <Fade triggerOnce fraction={0.5} duration={1000}>
                        <h1>Education</h1>
                    </Fade>
                    <div className='header-subtext-card'>
                        <Fade triggerOnce fraction={0.5} duration={1000} delay={250}>
                            <p> I'm currently in my third year at <span style={{color: '#080808'}}>Dartmouth College, </span> majoring in <span style={{color: '#080808'}}>Computer Science </span> with a minor in <span style={{color: '#080808'}}> Spanish</span>.</p>
                        </Fade>
                    </div>
                </div>
            </div>
            <div className='major-container'>
                <div className='major-text-container'>
                    <div className='major-text-header'>
                        <Fade triggerOnce fraction={0.5} duration={1000}>
                            <h1>Computer Science</h1> 
                        </Fade>
                        <Fade triggerOnce fraction={0.5} duration={1000} delay={500}>
                        <h2>Below are the courses I've taken in the computer science department thus far. I intend to focus primarily on <span style={{color: '#efefef'}}>applied computer science </span> through my upcoming courses. Click the cards below for more course information. </h2>
                        </Fade>
                    </div>
                </div>
                <div className='major-cards-container'>
                    <ul className='major-card-list'>
                        {cards.map((sectionCard, index) => (
                            <li className='card-li' key={index}>
                                <SectionCard
                                    title={sectionCard.title}
                                    icon={null}
                                    link={sectionCard.link}
                                    text={sectionCard.text}
                                    headerColor={'#080808'}
                                    bodyColor={'#4b4b4b'}
                                    cardStyle={{backgroundColor: '#f3f3f3', height:'25vw', width:'30vw'}}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='minor-container'>
                <div className='minor-text-container'>
                    <div className='minor-text-header'>
                        <Fade triggerOnce fraction={0.5} duration={1000}>
                            <h1>Spanish</h1> 
                        </Fade>
                        <Fade triggerOnce fraction={0.5} duration={1000} delay={500}>
                        <div className='minor-content-container'>
                            <div className='intro-courses-container'>
                                <h2>Introductory Courses</h2>
                            </div>
                            <div className='fsp-container'>
                            </div>
                        </div>
                        <h2>i</h2>
                        </Fade>
                    </div>
                </div>
            </div>           
        </div>
    );
};

export default Education;
