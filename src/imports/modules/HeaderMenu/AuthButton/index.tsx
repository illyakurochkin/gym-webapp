import React from 'react';
import {Button} from 'semantic-ui-react';
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setAccountAction} from "../../../store/account";
import api from "../../../api";
import {useAuthorized} from "../../../hooks/useAuthorized";

const AuthButton = () => {
  const history = useHistory();
  const {authorized} = useAuthorized();
  const dispatch = useDispatch();

  const handleSignIn = () => {
    history.push('/login')
  };

  const handleSignOut = () => {
    dispatch(setAccountAction(null));
    api.setAuthorizationHeader(null);
    history.push('/');
  };

  if (authorized) {
    return (
      <Button primary basic circular onClick={handleSignOut}>
        Вийти
      </Button>
    );
  }

  return (
    <Button primary basic circular onClick={handleSignIn}>
      Увійти
    </Button>
  );
};

export default AuthButton;
