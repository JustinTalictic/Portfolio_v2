import styled from 'styled-components';

export const Container = styled.div`
    background: #f1f1f1;
    height: 800px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const Wrapper = styled.div`
    max-width: 1000px;
    margin 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;
`;

export const H1 = styled.h1``;

export const Icon = styled.img``;

export const H2 = styled.h2``;

export const Card = styled.div``;

export const Resume = styled.div``;

export const Picture = styled.img``;
