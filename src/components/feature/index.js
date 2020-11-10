import React from 'react';
import {
    Background,
    Container,
    Title,
    Text,
    Button,
    HeroBg,
    VideoBg,
} from './styles/feature';

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

Feature.HeroBg = function FeatureHeroBg({ children, ...restProps }) {
    return <HeroBg {...restProps}>{children}</HeroBg>;
};

Feature.VideoBg = function FeatureVideoBg({ children, ...restProps }) {
    return <VideoBg {...restProps}>{children}</VideoBg>;
};
