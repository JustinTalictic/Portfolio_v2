import React, { useState, useEffect } from 'react';
import { Header } from '../components';
import { FaBars, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

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

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return (
        <Header scrollNav={scrollNav}>
            <Header.Frame>
                <Header.Title>{title}</Header.Title>
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
                            offset={-80}
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
                            offset={-80}
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
                            offset={-80}
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
                            offset={-80}
                        >
                            Contact
                        </Header.NavLinks>
                    </Header.NavItem>
                </Header.NavMenu>
                <Header.Group>
                    <Header.Picture>
                        <FaFacebook />
                    </Header.Picture>
                    <Header.Picture>
                        <FaGithub />
                    </Header.Picture>
                    <Header.Picture>
                        <FaInstagram />
                    </Header.Picture>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    );
}
