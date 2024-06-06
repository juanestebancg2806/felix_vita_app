import {
  StyledHeader,
  StyledLogo,
  StyledNavLink,
  StyledOption,
} from "./Header.styles";
import { CgProfile } from "react-icons/cg";
import { MdOutlineRecommend } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { RiProgress5Line } from "react-icons/ri";

import logo from "../../assets/logo.png";
import Typography from "../Typography/Typography";

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledNavLink to="/">
        <StyledLogo src={logo} />
      </StyledNavLink>
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
      <StyledNavLink to="/profile">
        <StyledOption>
          <CgProfile size={30} />
          <Typography variant="p" text="Profile" />
        </StyledOption>
      </StyledNavLink>
    </StyledHeader>
  );
};

export default Header;
