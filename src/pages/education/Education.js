import React from 'react';
import './Education.css';
import { Fade } from 'react-awesome-reveal';
import SectionCard from '../../components/SectionCard/SectionCard.js';
import fsp from '../../images/fsp.jpg';

const Education = () => {

    const cards = [
    {
        title: 'COSC 1',
        link: 'https://dartmouth.smartcatalogiq.com/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-1/', 
        color: '#bdefff', 
        text: "Introduction to Programming and Computation", 
        headerColor: '#ff00e1'
    }, 
    {
        title: 'COSC 10',
        link: "https://dartmouth.smartcatalogiq.com/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-10/", 
        color: '#bdefff', 
        text: "Problem Solving via Object-Oriented Programming", 
        headerColor: '#4800ff'
    }, 
    {
        title: 'COSC 30',
        link: 'https://dartmouth.smartcatalogiq.com/en/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-30/', 
        color: '#bdefff', 
        text: "Discrete Mathematics in Computer Science", 
        headerColor: '#e5ff00'
    }, 
    {
        title: 'COSC 50',
        link: 'https://dartmouth.smartcatalogiq.com/en/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-50/', 
        color: '#bdefff', 
        text: "Software Design and Implementation", 
        headerColor: '#37ff00'
    }, 
    {
        title: 'COSC 76',
        link: 'https://dartmouth.smartcatalogiq.com/en/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-76/', 
        color: '#bdefff', 
        text: "Artificial Intelligence", 
        headerColor: '#ff9900'
    }, 
    {
        title: 'CS 89.21',
        link: 'https://dartmouth.smartcatalogiq.com/current/orc/departments-programs-undergraduate/computer-science/cosc-computer-science-undergraduate/cosc-89-21/', 
        color: '#bdefff', 
        text: "Data Mining and Knowledge Discovery", 
        headerColor: '#a200ff'
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
                                    headerColor={sectionCard.headerColor}
                                    bodyColor={'#d0d0d0'}
                                    cardStyle={{backgroundColor: '#212121', height:'25vw', width:'30vw'}}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='minor-container'>
                <div className='border'></div>
                <div className='minor-text-header'>
                    <Fade triggerOnce fraction={0.5} duration={1000}>
                        <h1>Spanish</h1> 
                    </Fade>
                </div>
                <Fade triggerOnce fraction={0.5} duration={1000} delay={500}>
                    <div className='minor-content-container'>
                        <div className='minor-text-container'>
                            <p>I began studying Spanish in high school and continued with the introductory classes at Dartmouth. After, I took a few classes in Spanish writing and literature, before attending the Spanish foreign study program in <span>Buenos Aires, Argentina</span> in spring of 2023, where I homestayed and comleted three more courses in Argentinian culture, language, and history at <span>la Universidad Torcuato Di Tella</span>. </p>
                        </div>
                        <div className='minor-photo-container'>
                            <img src={fsp} alt="foreign-study" className="fsp-photo"></img>
                        </div>
                    </div>
                </Fade>
                <div className='border'></div>
            </div>           
            <div className='other-interests-container'>
                <h2>Beyond Computer Science and Spanish, I'm most interested in biology and economics. I've taken courses in both evolutionary biology and neuroscience, as well as the Economics pre-requisites and some public policy and public finance. I've decided not to declare a minor in economics, but still hope to take a few more courses that interest me.</h2>
            </div>
        </div>
    );
};

export default Education;
