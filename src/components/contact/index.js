import React from 'react';
import {
    Background,
    Frame,
    Title,
    TitleDiv,
    Input,
    Textarea,
    Submit,
    Picture,
    Status,
} from './styles/contact';

export default function Contact({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Contact.Frame = function ContactFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>;
};

Contact.Title = function ContactTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Contact.TitleDiv = function ContactTitleDiv({ children, ...restProps }) {
    return <TitleDiv {...restProps}>{children}</TitleDiv>;
};

Contact.Input = function ContactInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>;
};

Contact.Textarea = function ContactTextarea({ children, ...restProps }) {
    return <Textarea {...restProps}>{children}</Textarea>;
};

Contact.Submit = function ContactSubmit({ children, ...restProps }) {
    return <Submit {...restProps}>{children}</Submit>;
};

Contact.Picture = function ContactPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>;
};

Contact.Status = function ContactStatus({ children, ...restProps }) {
    return <Status {...restProps}>{children}</Status>;
};
