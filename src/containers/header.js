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
                    <Header.Picture>
                        <img src="./images/icons/facebook.png" alt="facebook" />
                    </Header.Picture>
                    <Header.Picture>
                        <img
                            src="./images/icons/github-logo.png"
                            alt="github"
                        />
                    </Header.Picture>
                    <Header.Picture>
                        <img
                            src="./images/icons/instagram.png"
                            alt="instagram"
                        />
                    </Header.Picture>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    );
}
