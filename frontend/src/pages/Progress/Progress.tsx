import Card from "../../components/Card/Card";
import Typography from "../../components/Typography/Typography";
import { StyledProgress } from "./Progress.styles";

/**
 * Renders the Progress component.
 * This component displays the progress of the patients.
 */
const Progress: React.FC = () => {
  return (
    <StyledProgress>
      <Card title="Progress">
        <Typography text="Some progress of your patients" />
      </Card>
    </StyledProgress>
  );
};

export default Progress;
