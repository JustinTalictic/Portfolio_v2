import React from 'react';
import { Skills } from '../components';

export function SkillsContainer({ children }) {
    return (
        <Skills id="skills">
            <Skills.Banner>
                <Skills.Frame>
                    <img
                        src="./images/skill-icons/css-icon.png"
                        alt="css-icon"
                    />
                </Skills.Frame>
                <Skills.Frame>
                    <img
                        src="./images/skill-icons/html5-icon.png"
                        alt="html5-icon"
                    />
                </Skills.Frame>
                <Skills.Frame>
                    <img
                        src="./images/skill-icons/javascript-icon.png"
                        alt="javascript-icon"
                    />
                </Skills.Frame>
                <Skills.Frame>
                    <img
                        src="./images/skill-icons/react-icon.png"
                        alt="react-icon"
                    />
                </Skills.Frame>
            </Skills.Banner>
            <Skills.Wrapper>
                <Skills.Resume>
                    <Skills.Picture src="./images/icons/resume.svg" />
                    <Skills.H2>Resume</Skills.H2>
                </Skills.Resume>
            </Skills.Wrapper>
        </Skills>
    );
}
