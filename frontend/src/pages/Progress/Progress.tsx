import Card from "../../components/Card/Card";
import Typography from "../../components/Typography/Typography";
import { StyledProgress } from "./Progress.styles";

const Progress: React.FC = () => {
  return (
    <StyledProgress>
      <Card title="Progress">
        <Typography text="Your progress is 70%" />
      </Card>
    </StyledProgress>
  );
};

export default Progress;
