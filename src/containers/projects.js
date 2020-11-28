import React from 'react';
import { Projects } from '../components';

export function ProjectsContainer({ children }) {
    return (
        <Projects id="projects">
            <Projects.Title>My Projects</Projects.Title>
            <Projects.Wrapper>
                <Projects.InfoRow>
                    <Projects.Column1>
                        <Projects.TextWrapper>
                            <Projects.SubTitle>Overview</Projects.SubTitle>
                            <Projects.Desc>*Descripton*</Projects.Desc>
                        </Projects.TextWrapper>
                    </Projects.Column1>
                    <Projects.Column2>
                        <Projects.TextWrapper>
                            <Projects.InfoTitle>
                                *INFO TITLE*
                            </Projects.InfoTitle>
                        </Projects.TextWrapper>
                        <Projects.ImgWrap>
                            <Projects.Img src="/images/project-img/startup.jpg" />
                        </Projects.ImgWrap>
                        <Projects.BtnWrapper>
                            <Projects.Button>Live Preview</Projects.Button>
                            <Projects.Button>View Source</Projects.Button>
                        </Projects.BtnWrapper>
                    </Projects.Column2>
                </Projects.InfoRow>
            </Projects.Wrapper>
        </Projects>
    );
}
