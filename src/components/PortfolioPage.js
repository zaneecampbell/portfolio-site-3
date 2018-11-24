import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../assets/particles-config.json';
import Header from './Header';
import Intro from './Intro';
import About from './About';

export const PortfolioPage = () => {
    return (
        <div>
            <Header />
            {/*Everything in here is on top of the "particles" background, everything has to be absolute*/}
            <div className='particle-wrapper'>
                <Intro />
                <Particles params={ParticleConfig} />
            </div>
            <div className='about-wrapper'>
                <About />
            </div>
        </div>
    )
}

export default PortfolioPage;