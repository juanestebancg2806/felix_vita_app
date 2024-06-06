import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    gap: 3rem;
    align-items: center;
    padding: 1rem 2rem;
    background-color: white;
    color: black;
    border-bottom-color: rgb(207, 212, 217);
    border-radius: 25px;
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const StyledLogo = styled.img`
    width: 50px;
    height: 50px;
`;

export const StyledOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

export const StyledNavLink = styled(NavLink)`
    fill: #6e757c;
    color: rgb(20 21 23 / 1);
    text-decoration: none;
`;

