import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Background = styled.nav`
    background: ${({ scrollNav }) =>
        scrollNav ? '#464646' : 'rgba(70, 70, 70, 0.6)'};
    height: ${({ scrollNav }) => (scrollNav ? '50px' : '80px')};
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    transition: 0.8s all ease;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
`;

export const Title = styled(LinkR)`
    color: white;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 50px;
`;

export const NavLinks = styled(LinkS)`
    color: white;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    box-sizing: border-box;

    &.active {
        border-bottom: 3px solid rgb(255, 195, 15);
    }
    
    &:hover {
        opacity: 0.5;
        transition: 0.5s;
    }
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

export const Group = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;
