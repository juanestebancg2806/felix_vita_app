import { ReactNode } from "react";

/**
 * Represents the props for a Card component.
 */
export interface CardProps {
  /**
   * The title of the card.
   */
  title?: ReactNode;
  
  /**
   * The content of the card.
   */
  children?: ReactNode;
}
