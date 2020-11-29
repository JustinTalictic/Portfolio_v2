import styled from 'styled-components';

export const Background = styled.div`
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        height: 700px;
        flex-direction: column;
    }
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 2rem;
`;

export const Frame = styled.div`
    align-items: center;
    justify-content: center;
    max-width: 800px;
`;

export const Title = styled.h1`
    text-transform: uppercase;
`;

export const Text = styled.p``;

export const Picture = styled.img`
    max-width: 18rem;
    width: 100%;
    box-shadow: 10px 8px 15px rgba(70, 70, 70, 0.6);

    @media screen and (max-width: 768px) {
        margin-top: 2rem;
    }
`;
