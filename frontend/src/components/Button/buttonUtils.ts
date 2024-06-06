import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	disabled?: boolean;
	text?: string | ReactNode;
	onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
	isLoading?: boolean;
}