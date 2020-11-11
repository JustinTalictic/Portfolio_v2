import React from 'react';
import { Skills } from '../components';

export function SkillsContainer({ children }) {
    return (
        <Skills>
            <Skills.H1></Skills.H1>
            <Skills.Wrapper>
                <Skills.Card>
                    <Skills.Icon />
                    <Skills.H2>React</Skills.H2>
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
