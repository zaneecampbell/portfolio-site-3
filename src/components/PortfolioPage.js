import React from 'react';
import Particles from 'react-particles-js';
import ParticleConfig from '../assets/particles-config.json';
import Header from './Header';

export const PortfolioPage = () => {
    return (
        <div>
            <Header />
            <Particles params={ParticleConfig} width='100%' height='calc(100vh - 48px)' position='absolute' />
        </div>
    )
}

export default PortfolioPage;