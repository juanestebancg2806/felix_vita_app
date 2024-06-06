import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./buttonUtils";

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  text,
  isLoading,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled || isLoading}>
      {text && text}
    </StyledButton>
  );
};

export default Button;
