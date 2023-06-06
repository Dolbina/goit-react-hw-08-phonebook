import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';

import { ButtonWrap, UserName, Wrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrap>
      <UserName>{user.email}</UserName>
      <ButtonWrap  type="button" onClick={() => dispatch(logOut())}>
        Logout
      </ButtonWrap>
    </Wrap>
  );
};
