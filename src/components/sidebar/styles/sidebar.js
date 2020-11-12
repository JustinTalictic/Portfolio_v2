import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';

export const Container = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #464646;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const Wrapper = styled.div`
    color: #fff;
`;

export const Menu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;

export const Link = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transistion: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
        transition: 0.2s ease-in-out;
    }
`;

export const Group = styled.div`
    margin-top: 2rem;
`;

export const Picture = styled.button`
    height: 2.5rem;
    width: 2.5rem;
    border-radius: 50%;
    background: transparent;
    outline: none;
    border: none;
    filter: brightness(0) invert(1);
    font-size: 1.8rem;
    cursor: pointer;
    margin-top: 0.25rem;
    transition: 0.5s;

    &:hover {
        opacity: 0.5;
    }
`;
