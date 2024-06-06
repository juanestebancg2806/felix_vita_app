import Typography from "../Typography/Typography";
import { StyledCard, StyledCardContent, StyledTitle } from "./Card.styles";
import { CardProps } from "./cardUtils";

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
