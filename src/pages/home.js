import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FeatureContainer } from '../containers/feature';
import { AboutContainer } from '../containers/about';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer></FeatureContainer>
                <AboutContainer></AboutContainer>
            </HeaderContainer>
        </>
    );
}
