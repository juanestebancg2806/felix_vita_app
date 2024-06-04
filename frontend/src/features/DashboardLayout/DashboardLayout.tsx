import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { StyledContent } from "./DashboardLayout.styles";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  );
};

export default DashboardLayout;
