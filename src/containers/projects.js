import React from 'react';
import { Projects } from '../components';

export function ProjectsContainer({ children }) {
    return (
        <Projects id="projects">
            <Projects.Frame>
                <Projects.Title>My Projects</Projects.Title>
            </Projects.Frame>
            <Projects.Frame>
                <Projects.CardFrame>
                    <Projects.Card>
                        <Projects.CardTitle>*Title*</Projects.CardTitle>
                    </Projects.Card>
                </Projects.CardFrame>
                <Projects.InfoFrame>
                    <Projects.Info>
                        <Projects.InfoTitle>*INFO TITLE*</Projects.InfoTitle>
                        <Projects.Desc>*Descripton*</Projects.Desc>
                        <Projects.Image></Projects.Image>
                        <Projects.Button>Live Version</Projects.Button>
                        <Projects.Button>GitHub</Projects.Button>
                    </Projects.Info>
                </Projects.InfoFrame>
            </Projects.Frame>
        </Projects>
    );
}
