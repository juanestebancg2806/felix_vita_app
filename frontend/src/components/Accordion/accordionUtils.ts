import { ReactNode, useState } from "react";

export interface AccordionProps {
    title: string;
    children?: ReactNode;
}

interface UseAccordionUtilsReturn {
    isOpen: boolean;
    toggle: () => void;
}

const useAccordionUtils = (): UseAccordionUtilsReturn => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(prev => !prev);
    };

    return { isOpen, toggle };
};

export default useAccordionUtils;
