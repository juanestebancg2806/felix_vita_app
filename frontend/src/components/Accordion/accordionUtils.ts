/**
 * A utility hook for managing the state of an accordion component.
 */
import { ReactNode, useState } from "react";

/**
 * Props for the Accordion component.
 */
export interface AccordionProps {
    title: string;
    children?: ReactNode;
}

/**
 * Return type of the useAccordionUtils hook.
 */
interface UseAccordionUtilsReturn {
    isOpen: boolean;
    toggle: () => void;
}

/**
 * A custom hook that provides utility functions for managing the state of an accordion component.
 * @returns An object containing the current state of the accordion and a function to toggle its state.
 */
const useAccordionUtils = (): UseAccordionUtilsReturn => {

    const [isOpen, setIsOpen] = useState(false);

    /**
     * Toggles the state of the accordion.
     */
    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    return { isOpen, toggle };
};

export default useAccordionUtils;
