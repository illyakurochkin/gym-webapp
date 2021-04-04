import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import api from "../api";
import {selectAccount, selectAccountLoading, setAccountAction, setAccountLoadingAction} from "../store/account";

export const AUTH_TOKEN_KEY = 'api-access-token';

export const useAuthorized = () => {
  const account = useSelector(selectAccount);
  const accountLoading = useSelector(selectAccountLoading);
  const dispatch = useDispatch();

  const [authorized, setAuthorized] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem(AUTH_TOKEN_KEY);

    if (token) {
      api.setAuthorizationHeader(token);

      api.getAccount()
        .then((account) => dispatch(setAccountAction(account)))
        .then(() => dispatch(setAccountLoadingAction(false)))
        .then(() => setAuthorized(true))
    }
  }, []);

  return {
    authorized: account || authorized,
    loading: loading || accountLoading,
    error
  };
};
