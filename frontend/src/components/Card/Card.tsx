import Typography from "../Typography/Typography";
import { StyledCard, StyledCardContent, StyledTitle } from "./Card.styles";
import { CardProps } from "./cardUtils";

/**
 * A reusable card component.
 *
 * @component
 * @param {React.ReactNode} props.children - The content of the card.
 * @param {string} props.title - The title of the card.
 * @returns {React.ReactNode} The rendered card component.
 */
const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <StyledCard>
      {title && (
        <StyledTitle>
          <Typography text={title} variant="h4" />
        </StyledTitle>
      )}
      <StyledCardContent>{children}</StyledCardContent>
    </StyledCard>
  );
};

export default Card;
