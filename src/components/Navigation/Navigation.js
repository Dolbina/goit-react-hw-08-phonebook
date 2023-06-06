
import { useAuth } from 'hooks';
import { NavLinkWrap } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLinkWrap   to="/">Home</NavLinkWrap>
      {isLoggedIn && <NavLinkWrap to="/contacts">Contacts</NavLinkWrap>}
    </nav>
  );
};
