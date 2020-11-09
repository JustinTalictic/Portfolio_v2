import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FeatureContainer } from '../containers/feature';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <FeatureContainer></FeatureContainer>
            </HeaderContainer>
        </>
    );
}
