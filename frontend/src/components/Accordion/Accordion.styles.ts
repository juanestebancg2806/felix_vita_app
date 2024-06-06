import styled from "styled-components";

export const StyledAccordion = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 0.25rem;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(196, 196, 196);
    
`;

export const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 8px;
    background-color: rgb(207, 212, 217);
    height: 2rem;
`;

export const StyledContent = styled.div`
    overflow: auto;
    padding: 12px;
`;