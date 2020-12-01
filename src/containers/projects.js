import React from 'react';
import { Projects } from '../components';
import projects from '../fixtures/Data.json';

export function ProjectsContainer({ children }) {
    return (
        <Projects id="projects">
            <Projects.Title>My Projects</Projects.Title>
            {projects.map(obj => (
                <Projects.Wrapper>
                    <Projects.InfoRow>
                        <Projects.Column1>
                            <Projects.TextWrapper>
                                <Projects.SubTitle>Overview</Projects.SubTitle>
                                <Projects.Desc>{obj.desc}</Projects.Desc>
                                <Projects.SubTitle>
                                    Notable Features
                                </Projects.SubTitle>
                                <Projects.UL>
                                    {obj.featureItems.map(item => (
                                        <Projects.LI>
                                            <p>{item}</p>
                                        </Projects.LI>
                                    ))}
                                </Projects.UL>
                                <Projects.SubTitle>
                                    Technologies Applied
                                </Projects.SubTitle>
                                <Projects.UL>
                                    {obj.techUsed.map(item => (
                                        <Projects.LI>
                                            <p>{item}</p>
                                        </Projects.LI>
                                    ))}
                                </Projects.UL>
                            </Projects.TextWrapper>
                        </Projects.Column1>
                        <Projects.Column2>
                            <Projects.TextWrapper>
                                <Projects.InfoTitle>
                                    {obj.title}
                                </Projects.InfoTitle>
                            </Projects.TextWrapper>
                            <Projects.ImgWrap>
                                <Projects.Img
                                    src={`/images/project-img/${obj.img}`}
                                />
                            </Projects.ImgWrap>
                            <Projects.BtnWrapper>
                                <a href={obj.liveLink}>
                                    <Projects.Button active={obj.liveActive}>
                                        Live Preview
                                    </Projects.Button>
                                </a>
                                <a href={obj.github}>
                                    <Projects.Button active={obj.githubActive}>
                                        View Source
                                    </Projects.Button>
                                </a>
                            </Projects.BtnWrapper>
                        </Projects.Column2>
                    </Projects.InfoRow>
                </Projects.Wrapper>
            ))}
        </Projects>
    );
}
