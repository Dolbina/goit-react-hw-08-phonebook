
import { NavLinkWrap } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLinkWrap  to="/register">
        Register
      </NavLinkWrap>
      <NavLinkWrap  to="/login">
        Log In
      </NavLinkWrap>
    </div>
  );
};
