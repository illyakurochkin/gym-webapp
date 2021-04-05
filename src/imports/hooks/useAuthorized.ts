import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectAccount, selectAccountLoading, setAccountAction, setAccountLoadingAction} from "../store/account";
import api from "../api";

export const AUTH_TOKEN_KEY = 'api-access-token';

export const useAuthorized = () => {
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
      api.setAuthorizationHeader(token);

      api.getAccount()
        .then((account) => dispatch(setAccountAction(account)))
        .then(() => dispatch(setAccountLoadingAction(false)))
    }
  }, []);

  return {
    authorized: Boolean(account),
    loading: accountLoading,
  };
};
