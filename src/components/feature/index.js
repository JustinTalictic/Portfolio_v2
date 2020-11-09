import React from 'react';
import { Background, Container, Title, Text, Button } from './styles/feature';

export default function Feature({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Feature.Frame = function FeatureFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Feature.Text = function FeatureText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};

Feature.Button = function FeatureButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
