import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header';
import { FeatureContainer } from '../containers/feature';
import { AboutContainer } from '../containers/about';
import { SidebarContainer } from '../containers/sidebar';
import { SkillsContainer } from '../containers/skills';
import { FooterContainer } from '../containers/footer';
import { ProjectsContainer } from '../containers/projects';
import { ContactContainer } from '../containers/contact';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <SidebarContainer
                isOpen={isOpen}
                toggle={toggle}
            ></SidebarContainer>
            <HeaderContainer toggle={toggle}></HeaderContainer>
            <FeatureContainer />
            <AboutContainer />
            <SkillsContainer />
            <ProjectsContainer></ProjectsContainer>
            <ContactContainer />
            <FooterContainer />
        </>
    );
}
