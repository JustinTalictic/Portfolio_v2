import React from 'react';
import {
    Container,
    Banner,
    Wrapper,
    H1,
    Card,
    Icon,
    H2,
    Resume,
    Picture,
    Frame,
} from './styles/skills';

export default function Skills({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Skills.Banner = function SkillsBanner({ children, ...restProps }) {
    return <Banner {...restProps}>{children}</Banner>;
};

Skills.Frame = function SkillsFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Skills.Wrapper = function SkillsWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Skills.H1 = function SkillsH1({ children, ...restProps }) {
    return <H1 {...restProps}>{children}</H1>;
};

Skills.Card = function SkillsCard({ children, ...restProps }) {
    return <Card {...restProps}>{children}</Card>;
};

Skills.Icon = function SkillsIcon({ src, ...restProps }) {
    return <Icon {...restProps} src={src}></Icon>;
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
