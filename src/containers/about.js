import React from 'react';
import { About } from '../components';

export function AboutContainer({ children }) {
    return (
        <About id="about">
            <About.Container>
                <About.Frame>
                    <About.Title>About Me</About.Title>
                    <About.Text>
                        I'm an easy going, charismatic, kind hearted guy who
                        loves to stay fit and cook. From an early age I was
                        fascinated by technology. It actually never peaked my
                        interest in how it worked until i was in college and had
                        to pick a major.Thats when I started connecting the dots
                        and was extremely captivated by how it all worked
                        together as a whole collective.
                    </About.Text>
                </About.Frame>
            </About.Container>
            <About.Container>
                <About.Picture
                    src="./images/portfolio-picture/me.jpg"
                    alt="me"
                />
            </About.Container>
        </About>
    );
}
