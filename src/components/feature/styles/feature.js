import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Background = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.75),
            rgba(255, 255, 255, 0.75)
        ),
        url(../images/background/forest1.jpg);
    background-size: cover;
    background-position: center;
    z-index: 1;
`;

export const HeroBg = styled.div`
    positon: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const Container = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 4rem;
    text-align: center;
    margin: 0;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Text = styled.div`
    text-transform: uppercase;
    font-size: 1.5em;
    background: rgba(255, 195, 15, 0.5);
    padding: 0 5px;
    margin-bottom: 6rem;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const Button = styled(LinkS)`
    background: #464646;
    height: 3rem;
    width: 3rem;
    border: none;
    outline: none;
    border-radius: 50%;
    align-items: center;
    justify-content: center;

    img {
        filter: brightness(0) invert(1);
        padding-top: 1.2rem;
        width: 12px;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 15px rgba(33, 33, 33, 0.5);
    }
`;
