import styled from 'styled-components';

export const Background = styled.div`
    display: flex;
    flex-direction: column;
    height: 1000px;
    padding-top: 5rem;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const Title = styled.h1``;

export const Wrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 760px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto: 
    margin-left: auto;
    padding: 0 24px;
    background: red;
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
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    display: flex;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const InfoTitle = styled.h1`
    font-size: 24px;
    line-height: 18px;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const SubTitle = styled.h3``;

export const Desc = styled.p``;

export const BtnWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

export const Button = styled.button`
    width: 200px;
    margin: 0.5rem 1rem;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    max-height: 300px;
    object-fit: cover;
    margin: 0;
`;
