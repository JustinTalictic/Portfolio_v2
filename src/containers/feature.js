import React from 'react';
import { Feature } from '../components';

export function FeatureContainer({ children }) {
    return (
        <Feature>
            <Feature.Frame>
                <Feature.Title>I am Justin Talictic</Feature.Title>
                <Feature.Text>Aspiring Developer</Feature.Text>
                <Feature.Button>
                    <img src="./images/icons/arrow-down.png" alt="arrowdown" />
                </Feature.Button>
            </Feature.Frame>
        </Feature>
    );
}
