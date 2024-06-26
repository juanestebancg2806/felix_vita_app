import Card from "../../components/Card/Card";
import Typography from "../../components/Typography/Typography";
import { StyledHome } from "./Home.styles";

/**
 * Renders the Home page component.
 *
 * @returns The rendered Home page component.
 */
const Home: React.FC = () => {
  return (
    <StyledHome>
      <Card title="Home">
        <Typography text="Welcome to the home page, select an option of the header." />
      </Card>
    </StyledHome>
  );
};

export default Home;
