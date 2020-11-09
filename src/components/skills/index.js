import React from 'react';
import {
    Background,
    Container,
    Title,
    Text,
    Picture,
    Group,
} from './styles/skills';

export default function Skills({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Skills.Frame = function SkillsFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Skills.Title = function SkillsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Skills.Text = function SkillsText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Skills.Picture = function SkillsPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src}></Picture>;
};

Skills.Group = function SkillsGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};
