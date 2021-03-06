import React from 'react';
import {
    Container,
    Banner,
    Wrapper,
    H2,
    Resume,
    Picture,
    Img,
} from './styles/skills';

export default function Skills({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Skills.Banner = function SkillsBanner({ children, ...restProps }) {
    return <Banner {...restProps}>{children}</Banner>;
};

Skills.Img = function SkillsImg({ children, ...restProps }) {
    return <Img {...restProps}>{children}</Img>;
};

Skills.Wrapper = function SkillsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Skills.H2 = function SkillsH2({ children, ...restProps }) {
    return <H2 {...restProps}>{children}</H2>;
};

Skills.Resume = function SkillsResume({ children, ...restProps }) {
    return <Resume {...restProps}>{children}</Resume>;
};

Skills.Picture = function SkillsPIcture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>;
};
