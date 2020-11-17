import React from 'react';
import { Background, Frame, Title } from './styles/projects';

export default function Projects({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Projects.Frame = function ProjectsFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Projects.Title = function ProjectsTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
