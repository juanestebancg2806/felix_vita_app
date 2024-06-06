import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledBottomNagivation = styled.nav`
  display: none;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-top: 0.5rem;
  justify-content: space-around;
  background-color: white;
  color: black;
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 10%);
  @media screen and (max-width: 1024px) {
    display: flex;
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
