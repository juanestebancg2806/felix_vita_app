/**
 * Renders the bottom navigation component.
 * @returns The JSX element representing the bottom navigation.
 */
import {
  StyledBottomNagivation,
  StyledLogo,
  StyledNavLink,
  StyledOption,
} from "./BottomNavigation.styles";
import logo from "../../assets/logo.png";
import { MdOutlineMessage, MdOutlineRecommend } from "react-icons/md";
import Typography from "../Typography/Typography";
import { PiUserListBold } from "react-icons/pi";
import { RiProgress5Line } from "react-icons/ri";
import { useAuth } from "../../services/authService/AuthContext";

const BottomNavigation: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return (
    <StyledBottomNagivation>
      <StyledNavLink to="/home">
        <StyledLogo src={logo} />
      </StyledNavLink>
      {isAuthenticated && (
        <>
          <StyledNavLink to="/recommend">
            <StyledOption>
              <MdOutlineRecommend size={30} />
              <Typography variant="p" text="Recommend" />
            </StyledOption>
          </StyledNavLink>
          <StyledNavLink to="/patients">
            <StyledOption>
              <PiUserListBold size={30} />
              <Typography variant="p" text="Patients" />
            </StyledOption>
          </StyledNavLink>
          <StyledNavLink to="/progress">
            <StyledOption>
              <RiProgress5Line size={30} />
              <Typography variant="p" text="Progress" />
            </StyledOption>
          </StyledNavLink>
          <StyledNavLink to="/messages">
            <StyledOption>
              <MdOutlineMessage size={30} />
              <Typography variant="p" text="Messages" />
            </StyledOption>
          </StyledNavLink>
        </>
      )}
    </StyledBottomNagivation>
  );
};

export default BottomNavigation;
