import React from 'react';
import { About } from '../components';

export function AboutContainer({ children }) {
    return (
        <About>
            <About.Title>About Me</About.Title>
            <About.Text>I'm from Houston Texas Hoe</About.Text>
            <About.Picture></About.Picture>
        </About>
    );
}
