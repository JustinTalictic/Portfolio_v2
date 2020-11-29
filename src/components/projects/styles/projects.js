import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 5rem;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Title = styled.h1`
    margin-bottom: 5rem;
`;

export const Wrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    margin-right: auto: 
    margin-left: auto;
    padding: 0 24px;
    border-bottom: 2px solid grey;
    margin-bottom: 3rem;

    &:last-of-type {
        border-bottom: none;
    }
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: ${({ imgStart }) =>
        imgStart ? `'col2 col1'` : `'col2 col1'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) =>
            imgStart ? `'col2' 'col1'` : `'col2 col2' 'col1 col1'`};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 1.5rem;
    grid-area: col1;
`;

export const Column2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 15px;
    padding: 0 1.5rem;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap
    max-width: 540px;
    padding-bottom: 1rem;
`;

export const InfoTitle = styled.h1`
    text-align: start;
    font-size: 26px;
    line-height: 18px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
`;

export const SubTitle = styled.h3`
    text-align: start;
`;

export const Desc = styled.p`
    text-align: start;
`;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    width: 200px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    margin: 1rem;
    padding: 8px;
    border: 0;
    background: rgba(255, 195, 15, 0.8);
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    a {
        text-decoration: none;
        color: white;
    }

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }

    &:disabled {
        opacity: 0.5;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;

    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
    margin: 0;
    box-shadow: 5px 10px 25px rgba(70, 70, 70, 0.6);
`;

export const UL = styled.ul`
    text-align: start;
    margin-left: -1rem;
    color: rgba(255, 195, 15, 0.8);
    margin-top: -1rem;
    margin-bottom: 0;
`;

export const LI = styled.li`
    text-align: start;

    p {
        color: black;
    }
`;
