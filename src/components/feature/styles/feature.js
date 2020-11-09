import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-image: linear-gradient(
            rgba(255, 255, 255, 0.75),
            rgba(255, 255, 255, 0.75)
        ),
        url(../images/background/forest1.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div``;

export const Title = styled.h1`
    font-size: 4em;
    margin: 0;
    margin-bottom: 2rem;
`;

export const Text = styled.div`
    text-transform: uppercase;
    font-size: 1.5em;
    background: rgba(255, 195, 15, 0.5);
    padding: 0 5px;
    margin-bottom: 6rem;
`;

export const Button = styled.button`
    background: #464646;
    height: 2.5rem;
    width: 2.5rem;
    border: none;
    outline: none;
    border-radius: 50%;

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
