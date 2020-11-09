import React from 'react';
import { Sidebar } from '../components';

export function SidebarContainer({ isOpen, toggle, children }) {
    return (
        <Sidebar isOpen={isOpen}>
            <Sidebar.Icon onClick={toggle}></Sidebar.Icon>
            <Sidebar.Wrapper>
                <Sidebar.Menu>
                    <Sidebar.Link to="about">About</Sidebar.Link>
                    <Sidebar.Link to="skills">Skills</Sidebar.Link>
                    <Sidebar.Link to="projects">Projects</Sidebar.Link>
                    <Sidebar.Link to="contact">Contact</Sidebar.Link>
                </Sidebar.Menu>
            </Sidebar.Wrapper>
        </Sidebar>
    );
}
