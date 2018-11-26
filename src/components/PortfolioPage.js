import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../assets/particles-config.json';
import Header from './Header';
import Intro from './Intro';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';

export const PortfolioPage = () => {
    return (
        <div id='top'>
            <Header />
            {/*Everything in here is on top of the "particles" background, everything has to be absolute*/}
            <div className='particle-wrapper'>
                <Intro />
                <Particles params={ParticleConfig} />
            </div>
            <div id='about' className='about-wrapper'>
                <About />
            </div>
            <div id='portfolio' className='portfolio-wrapper'>
                <Portfolio />
            </div>
            <div id='contact' className='contact-wrapper'>
                <Contact />
            </div>
        </div>
    )
}

export default PortfolioPage;

// Finishing touches on everything
// add contact section