import React from 'react';
import { About } from '../components';

export function AboutContainer({ children }) {
    return (
        <About id="about">
            <About.Container>
                <About.Frame>
                    <About.Title>About Me</About.Title>
                    <About.Text>
                        I am a graduate from the University of Houston with a
                        bachelors in Computer Science. I am currently pursuing
                        an opportunity to start a career in web development.
                    </About.Text>
                </About.Frame>
            </About.Container>
            <About.Container>
                <About.Picture>
                    <img
                        src="./images/portfolio-picture/me.jpg"
                        alt="picture of me"
                    />
                </About.Picture>
            </About.Container>
        </About>
    );
}
