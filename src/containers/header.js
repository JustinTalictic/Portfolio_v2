import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { FaBars, FaGithub, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

export function HeaderContainer({ toggle, children }) {
    const title = '<devjustin>';
    const [scrollNav, setScrollNav] = useState(false);

    function changeNav() {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    function toggleHome() {
        scroll.scrollToTop();
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <Header scrollNav={scrollNav}>
            <Header.Frame>
                <Header.Title to="/" onClick={toggleHome}>
                    {title}
                </Header.Title>
                <Header.MobileIcon onClick={toggle}>
                    <FaBars />
                </Header.MobileIcon>
                <Header.NavMenu>
                    <Header.NavItem>
                        <Header.NavLinks
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-50}
                        >
                            About
                        </Header.NavLinks>
                    </Header.NavItem>
                    <Header.NavItem>
                        <Header.NavLinks
                            to="skills"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-50}
                        >
                            Skills
                        </Header.NavLinks>
                    </Header.NavItem>
                    <Header.NavItem>
                        <Header.NavLinks
                            to="projects"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-50}
                        >
                            Projects
                        </Header.NavLinks>
                    </Header.NavItem>
                    <Header.NavItem>
                        <Header.NavLinks
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-50}
                        >
                            Contact
                        </Header.NavLinks>
                    </Header.NavItem>
                </Header.NavMenu>
                <Header.Group>
                    <Header.Picture>
                        <a href="https://www.linkedin.com/in/justintalictic/">
                            <FaLinkedin />
                        </a>
                    </Header.Picture>
                    <Header.Picture>
                        <a href="https://github.com/JustinTalictic">
                            <FaGithub />
                        </a>
                    </Header.Picture>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    );
}
