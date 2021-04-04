import React from 'react';
import { Button } from 'semantic-ui-react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectAccount, setAccountAction} from "../../../store/account";
import api from "../../../api";

const AuthButton = () => {
  const history = useHistory();
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();

  const handleSignIn = () => {
    history.push('/login')
  };

  const handleSignOut = () => {
    dispatch(setAccountAction(null));
    api.setAuthorizationHeader(null);
    history.push('/');
  };

  if(!account) {
    return (
      <Button primary basic circular onClick={handleSignIn}>
        Увійти
      </Button>
    );
  }

  return (
    <Button primary basic circular onClick={handleSignOut}>
      Вийти
    </Button>
  );

};

export default AuthButton;
