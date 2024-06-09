import { StyledButton } from "./Button.styles";
import { ButtonProps } from "./buttonUtils";

/**
 * A customizable button component.
 *
 * @component Button
 * @param {ButtonProps} props - The props for the Button component.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @param {boolean} props.disabled - Specifies whether the button is disabled.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {boolean} props.isLoading - Specifies whether the button is in a loading state.
 * @returns {JSX.Element} The rendered Button component.
 */
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
