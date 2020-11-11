import React from 'react';
import { Container, Text, Group, Picture } from './styles/footer';

export default function Footer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Footer.Text = function FooterText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Footer.Group = function FooterGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Footer.Picture = function FooterPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>;
};
