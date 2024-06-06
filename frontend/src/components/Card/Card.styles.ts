import styled from "styled-components";
import { HTMLAttributes } from "react";

export const StyledCard = styled.div`
  width: 100%;
  background-color: white;
  border-width: 1px;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: rgb(196, 196, 196);
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const StyledTitle = styled.div`
  font-weight: 600;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  border-bottom-width: 1px;
  background-color: rgb(207, 212, 217);
  padding: 8px;
  height: 2rem;
`;

export const StyledCardContent = styled.div.attrs<
  HTMLAttributes<HTMLDivElement>
>(() => ({
  className: `StyledCardContent`,
}))`
  padding: 12px;
  flex-grow: 1;
  overflow-x: auto;
`;
