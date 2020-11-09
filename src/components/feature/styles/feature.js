import styled from 'styled-components';

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
    z-index: -1;
`;

export const Container = styled.div`
    background: black;
`;

export const Title = styled.h1`
    font-size: 4em;
    margin: 0;
    margin-bottom: 2rem;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.div`
    text-transform: uppercase;
    font-size: 1.5em;
    background: rgba(255, 195, 15, 0.5);
    padding: 0 5px;
    margin-bottom: 6rem;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.button`
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
        padding-top: 0.4rem;
        width: 10px;
    }

    &:hover {
        cursor: pointer;
        box-shadow: 0 0 15px rgba(33, 33, 33, 0.5);
    }
`;
