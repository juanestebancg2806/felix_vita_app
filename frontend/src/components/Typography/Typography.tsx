import { StyledTypography } from "./Typography.styles";
import { TypographyProps } from "./typographyUtils";

/**
 * Renders a typography component with the specified text and variant.
 *
 * @param {Object} props - The component props.
 * @param {string} props.text - The text to be displayed.
 * @param {string} [props.variant="p"] - The variant of the typography component.
 * @returns {JSX.Element} The rendered typography component.
 */
const Typography: React.FC<TypographyProps> = ({ text, variant = "p" }) => {
  return <StyledTypography variant={variant}>{text} </StyledTypography>;
};

export default Typography;
