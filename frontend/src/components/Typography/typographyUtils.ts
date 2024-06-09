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

/**
 * Represents the props for the Typography component.
 */
export interface TypographyProps {
  /**
   * The variant of the typography.
   */
  variant?: VariantTypography;

  /**
   * The text content of the typography.
   */
  text?: ReactNode;

  /**
   * The child elements of the typography.
   */
  children?: ReactNode;
}
