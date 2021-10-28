import React from 'react';
import image from '../assets/home/background-home-mobile.jpg';
import '../styles/home.css'


const Home = () => {
    return (
        <div className='hero-image'>
            <div className='home-content'>

                <div className='title'>so, you want to travel to space</div>
                <div className='sub-title'>SPACE</div>
                <div className='info-text'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</div>
                <div className='btn-explore'>
                    <p>Explore</p>
                </div>
            </div>
        </div>
    );
};

export default Home;