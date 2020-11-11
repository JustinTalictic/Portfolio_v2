import React from 'react';
import { Feature } from '../components';

export function FeatureContainer({ children }) {
    return (
        <Feature>
            <Feature.HeroBg>
                <Feature.VideoBg
                    autoPlay
                    loop
                    muted
                    src={'/videos/video.mp4'}
                    type="video/mp4"
                />
            </Feature.HeroBg>
            <Feature.Frame>
                <Feature.Title>I am Justin Talictic</Feature.Title>
                <Feature.Text>Aspiring Developer</Feature.Text>
                <Feature.Button
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                >
                    <img src="./images/icons/arrow-down.png" alt="arrowdown" />
                </Feature.Button>
            </Feature.Frame>
        </Feature>
    );
}
