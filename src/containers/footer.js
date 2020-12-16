import React from 'react';
import { Footer } from '../components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

export function FooterContainer({ children }) {
    function toggleHome() {
        scroll.scrollToTop();
    }

    return (
        <Footer>
            <Footer.Group>
                <Footer.Text onClick={toggleHome}>Scroll to top</Footer.Text>
            </Footer.Group>
            <Footer.Group>
                <Footer.Picture>
                    <a href="https://www.linkedin.com/in/justintalictic/">
                        <FaLinkedin />
                    </a>
                </Footer.Picture>
                <Footer.Picture>
                    <a href="https://github.com/JustinTalictic">
                        <FaGithub />
                    </a>
                </Footer.Picture>
            </Footer.Group>
        </Footer>
    );
}
