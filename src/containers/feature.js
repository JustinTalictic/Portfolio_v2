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
                    playsinline
                    src={'/videos/video.mp4'}
                    type="video/mp4"
                />
            </Feature.HeroBg>
            <Feature.Frame>
                <Feature.Title>I am Justin Talictic</Feature.Title>
                <Feature.Text>Aspiring Developer</Feature.Text>
                <Feature.Subtext>
                    I am a graduate from the University of Houston with a
                    bachelors in Computer Science. I am currently pursuing an
                    opportunity to start a career in web or software
                    development.
                </Feature.Subtext>
                <Feature.Button
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-50}
                >
                    <img src="./images/icons/arrow-down.png" alt="arrowdown" />
                </Feature.Button>
            </Feature.Frame>
        </Feature>
    );
}
