import React from 'react';
import { Background, Frame, Title } from './styles/contact';

export default function Contact({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Contact.Frame = function ContactFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Contact.Title = function ContactTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};
