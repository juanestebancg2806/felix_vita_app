import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Represents the props for the Button component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Specifies whether the button is disabled.
	 */
	disabled?: boolean;
	
	/**
	 * The text or ReactNode to be displayed inside the button.
	 */
	text?: string | ReactNode;
	
	/**
	 * The event handler function for the button's onClick event.
	 */
	onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
	
	/**
	 * Specifies whether the button is in a loading state.
	 */
	isLoading?: boolean;
}