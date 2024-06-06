import styled from "styled-components";

export const StyledMessages = styled.div`
  margin-top: 1.25rem;
  max-width: 90vw;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledChats = styled.div`
  max-width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 0 auto;
`;

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.25rem;
  gap: 1rem;
`;

export const StyledMessageFrom = styled.div`
  padding: 0.5rem;
  background-color: #f1f0f0;
  border-radius: 0.25rem;
  border: solid 1px;
  margin-right: auto;
  max-width: 200px;
  word-wrap: break-word;
`;

export const StyledMessageTo = styled.div`
  padding: 0.5rem;
  background-color: #f1f0f0;
  border-radius: 0.25rem;
  border: solid 1px;
  margin-left: auto;
  max-width: 200px;
  word-wrap: break-word;
`;

export const StyledMessageInputContainer = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 1rem;
  align-items: center;
  align-content: center;

`;

export const StyledMessageTextArea = styled.textarea`
  border-width: 1px;
  border-radius: 0.25rem;
  padding: 10px 14px;
  outline: 2px solid transparent;
  outline-offset: 2px;
  width: 80%;
  &::placeholder {
    color: rgb(163, 163, 163);
    }
`;
