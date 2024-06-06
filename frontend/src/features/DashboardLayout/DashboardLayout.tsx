import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import { StyledContent } from "./DashboardLayout.styles";
import BottomNavigation from "../../components/BottomNavigation/BottomNavigation";

const DashboardLayout: React.FC = () => {
  return (
    <>
      <Header />
      <BottomNavigation />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  );
};

export default DashboardLayout;
