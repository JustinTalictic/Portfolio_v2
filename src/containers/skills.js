import React from 'react';
import { Skills } from '../components';
import Pdf from '../documents/Resume.pdf';

export function SkillsContainer({ children }) {
    return (
        <Skills id="skills">
            <Skills.Banner>
                <Skills.Img
                    src="./images/skill-icons/css-icon.png"
                    alt="css-icon"
                />
                <Skills.Img
                    src="./images/skill-icons/html5-icon.png"
                    alt="html5-icon"
                />
                <Skills.Img
                    src="./images/skill-icons/javascript-icon.png"
                    alt="javascript-icon"
                />
                <Skills.Img
                    src="./images/skill-icons/react-icon.png"
                    alt="react-icon"
                />
            </Skills.Banner>
            <Skills.Wrapper>
                <a href={Pdf} rel="noreferrer" target="_blank">
                    <Skills.Resume>
                        <Skills.Picture src="./images/icons/resume.svg" />
                        <Skills.H2>Resume</Skills.H2>
                    </Skills.Resume>
                </a>
            </Skills.Wrapper>
        </Skills>
    );
}
