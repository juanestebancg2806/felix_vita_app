import { ReactNode } from "react";

export type VariantTypography =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "span"
  | "p"
  | "label";
  
export interface TypographyProps {
  variant?: VariantTypography;
  text?: ReactNode;
  children?: ReactNode;
  className?: string;
  required?: boolean;
  $textTooltip?: string;
  htmlFor?: string;
  disabled?: boolean;
  onClickInfoIcon?: () => void;
}
