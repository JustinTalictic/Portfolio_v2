import React from 'react';
import { Projects } from '../components';

export function ProjectsContainer({ children }) {
    return (
        <Projects id="projects">
            <Projects.Frame>
                <Projects.Title>My Projects</Projects.Title>
            </Projects.Frame>
            <Projects.Frame></Projects.Frame>
        </Projects>
    );
}
