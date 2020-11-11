import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2.5rem 2rem;
    background-color: rgba(255, 195, 15, 0.8);
    align-items: center;
    justify-content: center;
`;

export const Text = styled.div`
    text-decoration: underline;
    cursor: pointer;
    font-size: 18px;
    margin: 0 0 2rem 0;
    transition: 0.5s;

    &:hover {
        color: white;
    }
`;

export const Group = styled.div`
    align-items: center;
    justify-content: center;
`;

export const Picture = styled.button`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: transparent;
    outline: none;
    border: none;
    font-size: 1.8rem;
    cursor: pointer;
    margin-top: 0.25rem;
    transition: 0.5s;

    &:hover {
        filter: brightness(0) invert(1);
    }
`;
