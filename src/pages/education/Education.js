import React from 'react';
import './Education.css';
import { Fade } from 'react-awesome-reveal';
import SectionCard from '../../components/SectionCard/SectionCard.js';

const Education = () => {

    const cards = [
    {
        title: 'CS 1',
        link: '/education', 
        color: '#bdefff', 
        text: "Inroduction to Computer Science"
    }];

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
                        <h2>Below are the courses I've taken in the computer science department thus far. I intend to focus primarily on <span style={{color: '#efefef'}}>applied computer science </span> through my upcoming courses. </h2>
                        </Fade>
                    </div>
                </div>
                <div className='major-cards-container'>
                    <ul className='card-list'>
                        {cards.map((sectionCard, index) => (
                            <li className='card-li' key={index}>
                                <SectionCard
                                    title={sectionCard.title}
                                    icon={null}
                                    link={sectionCard.link}
                                    text={sectionCard.text}
                                    headerColor={'#080808'}
                                    bodyColor={'#080808'}
                                    background={'#f3f3f3'}
                                    height={'20vw'}
                                    width={'30vw'}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Education;
