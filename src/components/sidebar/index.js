import React from 'react';
import {
    Container,
    Icon,
    CloseIcon,
    Wrapper,
    Menu,
    Link,
    Group,
    Picture,
} from './styles/sidebar';

export default function Sidebar({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

Sidebar.Icon = function SidebarIcon({ children, ...restProps }) {
    return (
        <Icon {...restProps}>
            <CloseIcon />
            {children}
        </Icon>
    );
};

Sidebar.Wrapper = function SidebarWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
};

Sidebar.Menu = function SidebarMenu({ children, ...restProps }) {
    return <Menu {...restProps}>{children}</Menu>;
};

Sidebar.Link = function SidebarLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>;
};

Sidebar.Group = function SidebarGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
};

Sidebar.Picture = function SidebarPicture({ children, ...restProps }) {
    return <Picture {...restProps}>{children}</Picture>;
};
