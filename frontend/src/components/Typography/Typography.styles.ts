import React from "react";
import { TypographyProps, VariantTypography } from "./typographyUtils";
import styled from "styled-components";

const SelectedText: React.FC<TypographyProps> = ({
  variant = "p",
  children,
  ...props
}: TypographyProps) => React.createElement(variant, props, children);

const selectClassNameText = {
  h1: `font-size: 1.5rem;
       line-height: 2rem;`,
  h2: `font-size: 1.25rem;
       line-height: 1.75rem; `,
  h3: `font-size: 1.125rem;
       line-height: 1.75rem; `,
  h4: `font-size: 1rem;
       line-height: 1.5rem; `,
  h5: `font-size: 0.875rem;
       line-height: 1.25rem; `,
  h6: `font-size: 0.75rem;
       line-height: 1rem; `,
  span: `font-size: 0.875rem;
         line-height: 1.25rem; `,
  p: `font-size: 1rem;
      line-height: 1.25rem; `,
  label: `margin-bottom: 0.25rem; 
          font-size: 1rem;
          line-height: 1.5rem; 
          font-weight: 600;`
};

export const StyledTypography = styled(SelectedText)<{variant: VariantTypography}>`
    ${({ variant }) => selectClassNameText[variant]}
`;
