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

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo src={logo} />
      <StyledNavLink to="/recommend">
        <StyledOption>
          <MdOutlineRecommend size={30} />
          <p>Recommend</p>
        </StyledOption>
      </StyledNavLink>
      <StyledNavLink to="/patients">
        <StyledOption>
          <PiUserListBold size={30} />
          <p>Patients</p>
        </StyledOption>
      </StyledNavLink>
      <StyledNavLink to="/progress">
        <StyledOption>
          <RiProgress5Line size={30} />
          <p>Progress</p>
        </StyledOption>
      </StyledNavLink>
      <StyledNavLink to="/profile">
        <StyledOption>
          <CgProfile size={30} />
          <p>Profile</p>
        </StyledOption>
      </StyledNavLink>
    </StyledHeader>
  );
};

export default Header;
