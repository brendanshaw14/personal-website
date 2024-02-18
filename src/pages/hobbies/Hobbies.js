import React from 'react';
import skiing from "../../images/skiing.jpg";
import toadboat from "../../images/toadboat.jpg";
import { Fade } from 'react-awesome-reveal';
import "./Hobbies.css";

const Hobbies = () => {
    return (
        <div>
            <div className='hobbies-intro-container'>
                <h1>Hobbies</h1>
                <h2>Some things I like to do in my free time.</h2>
            </div>
            <div className='hobbies-content-container'>
                <div className='border'></div>
                <div className='sports-container'>
                    <div className='sports-header'>
                        <h1>Sports</h1>
                    </div>
                    <div className='sports-content'>
                        <div className='sports-text'>
                            <p>I've loved sports all of my life, my favorites currently being volleyball and skiing. At Dartmouth, I play for the men's club volleyball team, and enjoy skiing often with my friends or playing pickup games of whatever we can find. I also ran track competitively thorughout high school but have since switched to just running for fun, given the painful nature of track.</p>
                        </div>
                        <img src={skiing} alt="skiing" className="skiing-photo"></img>
                    </div>
                </div>
                <div className='music-container'>
                    <div className='music-header'>
                        <h1>Music</h1>
                    </div>
                    <div className='music-content'>
                        <div className='music-text'>
                            <p>My main instruments are piano and guitar. I began piano at age 5, and have played guitar for a little over 4 years. At Dartmouth, I study jazz guitar and jazz piano, and play guitar in a student band with a few friends. I've produced a few songs with friends, and I love listening to music whenever I can. </p>
                        </div>
                        <img src={toadboat} alt="toadboat" className="toadboat-photo"></img>
                    </div>
                </div>
                <div className='album-container'>
                    <div className='album-header-container'>
                        <h3>Some of my favorite genres are indie, jazz, rock, hip hop, and electronic. Below are some of my favorite albums. </h3>
                    </div>
                    <div className='album-content-container'>
                        <iframe className="album" title="This Old Dog" src="https://open.spotify.com/embed/album/4NNq2vwTapv4fSJcrZbPH7?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="A Song for Every Moon" src="https://open.spotify.com/embed/album/3IGPQEGAiZZI4Iba81GNq5?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Settle" src="https://open.spotify.com/embed/album/1lM5IfaqcIsXd6UCV3aDSs?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Awaken, My Love" src="https://open.spotify.com/embed/album/7caGY3YPOchIO8xLvTKWN4?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="2014 Forest Hills Drive" src="https://open.spotify.com/embed/album/0UMMIkurRUmkruZ3KGBLtG?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Astroworld" src="https://open.spotify.com/embed/album/41GuZcammIkupMPKH2OJ6I?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="A Love Letter to You 3" src="https://open.spotify.com/embed/album/1fFwMXuTJ8J3KXo14Vvsna?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Abbey Road" src="https://open.spotify.com/embed/album/0ETFjACtuP2ADo6LFhL6HN?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Igor Road" src="https://open.spotify.com/embed/album/5zi7WsKlIiUXv09tbGLKsE?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Pronounced McGee" src="https://open.spotify.com/embed/album/25mNgv9kcDpET9UWcCxu16?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Time Out" src="https://open.spotify.com/embed/album/0nTTEAhCZsbbeplyDMIFuA?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Bloom" src="https://open.spotify.com/embed/album/4EAehCii5lZgeewct1LA5p?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Somewhere In-Between" src="https://open.spotify.com/embed/album/2ZM9VkZ1rsJsKgwW1V99Ju?utm_source=generator&theme=0" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Led Zeppelin IV" src="https://open.spotify.com/embed/album/44Ig8dzqOkvkGDzaUof9lK?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Isolation" src="https://open.spotify.com/embed/album/4EPQtdq6vvwxuYeQTrwDVY?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="More Life" src="https://open.spotify.com/embed/album/1lXY618HWkwYKJWBRYR4MK?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Solo in Rio 1959" src="https://open.spotify.com/embed/album/60xmVPU5u2ABpEqi2g8ZIn?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Freudian" src="https://open.spotify.com/embed/album/3xybjP7r2VsWzwvDQipdM0?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="The Legendary Riverside Albums" src="https://open.spotify.com/embed/album/6NxBh0rm9smt55pOLluK8C?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="Electric Ladyland" src="https://open.spotify.com/embed/album/5z090LQztiqh13wYspQvKQ?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                        <iframe className="album" title="18 Months" src="https://open.spotify.com/embed/album/7w19PFbxAjwZ7UVNp9z0uT?utm_source=generator" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hobbies;
