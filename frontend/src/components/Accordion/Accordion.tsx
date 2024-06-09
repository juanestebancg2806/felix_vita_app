/**
 * Accordion component that displays a collapsible content section with a title.
 *
 * @component
 * @param {AccordionProps} props - The props for the Accordion component.
 * @param {string} props.title - The title of the accordion.
 * @param {ReactNode} props.children - The content to be displayed when the accordion is open.
 * @returns {JSX.Element} The rendered Accordion component.
 */
import Typography from "../Typography/Typography";
import {
  StyledAccordion,
  StyledContent,
  StyledTitle,
} from "./Accordion.styles";
import useAccordionUtils, { AccordionProps } from "./accordionUtils";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const { isOpen, toggle } = useAccordionUtils();

  return (
    <StyledAccordion>
      <StyledTitle onClick={toggle}>
        <Typography text={title} variant="h4" />
        {!isOpen ? <FaArrowDown size={15} /> : <FaArrowUp size={15} />}
      </StyledTitle>
      {isOpen && <StyledContent>{children}</StyledContent>}
    </StyledAccordion>
  );
};

export default Accordion;
