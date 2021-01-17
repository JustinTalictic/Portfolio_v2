import styled from 'styled-components';

export const Container = styled.div`
    background: #f1f1f1;
    height: 600px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 600px;
    }
`;

export const Banner = styled.div`
    padding: 1.5rem 0;
    margin: 0 5%;
    border-bottom: 3px solid rgb(255, 195, 15);
`;

export const Img = styled.img`
    margin: 5px 5%;
    width: 50px;
    object-fit: scale-down;

    @media screen and (max-width: 768px) {
        width: 50px;
    }
`;

export const Wrapper = styled.div`
    margin: 5rem auto;
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        text-decoration: none;
        color: black;
    }
`;

export const H2 = styled.h2`
    font-size: 1.5rem;
    margin-bottomm: 64px;
`;

export const Resume = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    max-height: 250px;
    width: 200px;
    padding: 20px 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.03);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const Picture = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;
