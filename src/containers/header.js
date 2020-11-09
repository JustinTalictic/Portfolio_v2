import React from 'react';
import { Header } from '../components';

export function HeaderContainer({ children }) {
    const title = '<devjustin>';
    return (
        <Header>
            <Header.Frame>
                <Header.Group>
                    <Header.Title>{title}</Header.Title>
                    <Header.Text>Home</Header.Text>
                    <Header.Text>About</Header.Text>
                    <Header.Text>Projects</Header.Text>
                    <Header.Text>Contact</Header.Text>
                </Header.Group>
                <Header.Group>
                    <Header.Picture></Header.Picture>
                    <Header.Picture></Header.Picture>
                    <Header.Picture></Header.Picture>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    );
}
