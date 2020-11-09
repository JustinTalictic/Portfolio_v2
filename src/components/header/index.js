import React from 'react';
import {
    Background,
    Container,
    Title,
    Picture,
    Group,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
} from './styles/header';

export default function Header({ children, ...restProps }) {
    return <Background {...restProps}>{children}</Background>;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
    return <Picture {...restProps} src={src}></Picture>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Header.MobileIcon = function HeaderMobileIcon({ children, ...restProps }) {
    return <MobileIcon {...restProps}>{children}</MobileIcon>;
};

Header.NavMenu = function HeaderNavMenu({ children, ...restProps }) {
    return <NavMenu {...restProps}>{children}</NavMenu>;
};

Header.NavItem = function HeaderNavItem({ children, ...restProps }) {
    return <NavItem {...restProps}>{children}</NavItem>;
};

Header.NavLinks = function HeaderNavLinks({ children, ...restProps }) {
    return <NavLinks {...restProps}>{children}</NavLinks>;
};
