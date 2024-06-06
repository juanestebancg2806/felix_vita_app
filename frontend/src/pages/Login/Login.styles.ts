import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
`;
export const StyledLogin = styled.div`
  margin-top: 1.25rem;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 1024px) {
    max-width: 80%;
  }
`;

export const StyledInputContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  max-width: 200px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const StyledErrorLabel = styled.p`
  color: rgb(204 0 0 / 0.75);
`;

export const StyledLoginButtonWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: start;
`;
