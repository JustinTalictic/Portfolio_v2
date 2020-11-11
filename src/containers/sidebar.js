import React from 'react';
import { Sidebar } from '../components';

export function SidebarContainer({ isOpen, toggle, children }) {
    return (
        <Sidebar isOpen={isOpen}>
            <Sidebar.Icon onClick={toggle}></Sidebar.Icon>
            <Sidebar.Wrapper>
                <Sidebar.Menu>
                    <Sidebar.Link to="about" onClick={toggle}>
                        About
                    </Sidebar.Link>
                    <Sidebar.Link to="skills" onClick={toggle}>
                        Skills
                    </Sidebar.Link>
                    <Sidebar.Link to="projects" onClick={toggle}>
                        Projects
                    </Sidebar.Link>
                    <Sidebar.Link to="contact" onClick={toggle}>
                        Contact
                    </Sidebar.Link>
                </Sidebar.Menu>
            </Sidebar.Wrapper>
        </Sidebar>
    );
}
