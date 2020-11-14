import React from 'react';
import { Skills } from '../components';

export function SkillsContainer({ children }) {
    return (
        <Skills id="skills">
            <Skills.H1>Skills</Skills.H1>
            <Skills.Wrapper>
                <Skills.Card>
                    <Skills.Icon />
                    <Skills.H2>React</Skills.H2>
                </Skills.Card>
                <Skills.Card>
                    <Skills.Icon />
                    <Skills.H2>Javascript</Skills.H2>
                </Skills.Card>
                <Skills.Card>
                    <Skills.Icon />
                    <Skills.H2>HTML</Skills.H2>
                </Skills.Card>
                <Skills.Card>
                    <Skills.Icon />
                    <Skills.H2>CSS</Skills.H2>
                </Skills.Card>
            </Skills.Wrapper>
            <Skills.Wrapper>
                <Skills.Resume>
                    <Skills.Picture />
                    <Skills.H2>Resume</Skills.H2>
                </Skills.Resume>
            </Skills.Wrapper>
        </Skills>
    );
}
