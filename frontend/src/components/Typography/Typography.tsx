import { StyledTypography } from "./Typography.styles";
import { TypographyProps } from "./typographyUtils";

const Typography: React.FC<TypographyProps> = ({ text, variant = "p" }) => {
  return <StyledTypography variant={variant}>{text} </StyledTypography>;
};

export default Typography;
