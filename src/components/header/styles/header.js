import styled from 'styled-components';

export const Background = styled.section`
    display: flex;
    flex-direction: column;
    background: #464646;
    height: 100vh;
    margin: 0;
`;

export const Container = styled.div`
    display: flex;
    margin: 0 3rem;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.div`
    color: white;
    font-size: 1.5em;
    margin-right: 2rem;
`;

export const Text = styled.div`
    color: white;
    margin-right: 1rem;
    transition: 0.5s;

    &:hover {
        cursor: pointer;
        opacity: 0.5;
    }
`;

export const Picture = styled.button`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: transparent;
    outline: none;
    border: none;

    &:hover {
        background: #e0e0e0;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
`;
