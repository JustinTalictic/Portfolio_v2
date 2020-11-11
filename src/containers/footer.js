import React from 'react';
import { Footer } from '../components';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
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
                    <FaLinkedin />
                </Footer.Picture>
                <Footer.Picture>
                    <FaGithub />
                </Footer.Picture>
                <Footer.Picture>
                    <FaFacebook />
                </Footer.Picture>
                <Footer.Picture>
                    <FaInstagram />
                </Footer.Picture>
            </Footer.Group>
        </Footer>
    );
}
