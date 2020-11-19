import styled from 'styled-components';

export const Background = styled.div`
    height: 700px;
    background: #f1f1f1;
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
`;

export const Frame = styled.div`
    margin-top: 4rem;
`;

export const Title = styled.h1``;

export const Text = styled.h3``;

export const Input = styled.input`
    font-size: 18px;
    width: 250px;
    border: none;
    border-bottom: 2px solid rgba(255, 195, 15, 0.8);
    padding-bottom: 7px;
    background: transparent;
    margin: 0 2rem;
`;

export const Textarea = styled.textarea`
    width: 600px;
    height: 200px;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid rgba(255, 195, 15, 0.8);
    padding-bottom: 7px;
    background: transparent;
`;

export const Submit = styled.button`
    border: none;
    width: 100px;
    height: 3rem;
    background: rgba(255, 195, 15, 0.8);
`;
