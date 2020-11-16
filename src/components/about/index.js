import React from 'react';
import {
    Background,
    Title,
    Text,
    Picture,
    Container,
    Frame,
} from './styles/about';

export default function About({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

About.Container = function AboutContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

About.Frame = function AboutFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

About.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

About.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

About.Picture = function AboutPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>;
};
