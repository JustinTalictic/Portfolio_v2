import styled from 'styled-components';

export const Background = styled.div`
    height: 800px;
    background: #f1f1f1;
    flex-direction: column;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows:  15% auto auto;
    column-gap: 2rem;
    grid-template-areas: 
    "title title title title"
    "frame frame picture picture"
    "frame frame picture picture";

    @media screen and (max-width: 768px) {
        height: 1000px;
        grid-template-columns: 1fr;
        grid-template-rows:  15% 400px auto;
        column-gap: 2rem;
        grid-template-areas: 
        "title"
        "frame"
        "picture";
    }

    @media screen and (min-width: 1800px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 
        "title title title"
        "frame frame picture"
        "frame frame picture";
    }
}
`;

export const Frame = styled.form`
    grid-area: frame;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    margin-left: 4rem;
    justify-self: end;
    align-self: center;
    width: 90%;
    max-width: 800px;

    @media screen and (max-width: 768px) {
        margin-left: 0;
        justify-self: center;
        width: 60%;
    }

    @media screen and (min-width: 1800px) {
        justify-self: center;
    }
`;

export const Title = styled.h1`
    grid-area: title;
    padding-top: 5rem;
`;

export const Text = styled.h3``;

export const Input = styled.input`
    font-size: 18px;
    border: none;
    border-bottom: 2px solid rgba(255, 195, 15, 0.8);
    padding: 7px 5px;
    margin-bottom: 1rem;
    background: transparent;
    font-family: 'Open Sans', sans-serif;
`;

export const Textarea = styled.textarea`
    height: 200px;
    font-size: 18px;
    border: none;
    border-bottom: 2px solid rgba(255, 195, 15, 0.8);
    padding: 7px 5px;
    background: transparent;
    resize: none;
    margin-bottom: 1rem;
    font-family: 'Open Sans', sans-serif;
`;

export const Submit = styled.button`
    border: none;
    width: 100px;
    height: 3rem;
    background: rgba(255, 195, 15, 0.8);
    color: #fff;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }

    &:disabled {
        opacity: 0.5;
    }
`;

export const Picture = styled.div`
    grid-area: picture;

    justify-self: start;
    align-self: center;

    img {
        width: 80%;
        max-width: 800px;
        height: auto;
    }

    @media screen and (max-width: 768px) {
        justify-self: center;

        img {
            width: 50%;
            max-width: 800px;
            height: auto;
        }
    }

    @media screen and (min-width: 1800px) {
        justify-self: start;
    }
`;
