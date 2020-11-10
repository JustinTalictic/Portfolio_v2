import React, { useState, useEffect, createContext } from 'react';
import { Header } from '../components';
import { FaBars, FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

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
                        <Header.NavLinks to="about">About</Header.NavLinks>
                    </Header.NavItem>
                    <Header.NavItem>
                        <Header.NavLinks to="skills">Skills</Header.NavLinks>
                    </Header.NavItem>
                    <Header.NavItem>
                        <Header.NavLinks to="projects">
                            Projects
                        </Header.NavLinks>
                    </Header.NavItem>
                    <Header.NavItem>
                        <Header.NavLinks to="contact">Contact</Header.NavLinks>
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
