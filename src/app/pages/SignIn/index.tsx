import React from 'react';
import {Flex} from '@chakra-ui/react';
import {Button, Header, Icon} from "semantic-ui-react";
import { Box } from '@chakra-ui/react';
import SignInForm, {FormValues} from './SignInForm';
import api from '../../../imports/api';
import {AUTH_TOKEN_KEY} from "../../../imports/hooks/useAuthorized";
import {setAccountAction, setAccountLoadingAction} from "../../../imports/store/account";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = async ({email, password}: FormValues) => {
    const token = await api.authenticate(email, password);
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    api.setAuthorizationHeader(token);

    dispatch(setAccountLoadingAction(true));
    const account = await api.getAccount();
    dispatch(setAccountAction(account));
    dispatch(setAccountLoadingAction(false));
  };

  const handleSignUpClick = () => {
    history.push('/signup');
  }

  const handleBackClick = () => {
    history.goBack();
  }

  return (
    <Flex align="center" justify="center" height="90vh" margin="auto">
      <Flex
        direction={"column"}
        position="relative"
        padding="30px 50px 30px 40px"
        borderRadius="16px"
        sx={{
          maxWidth: 512,
          minWidth: 512,
          m: 'auto',
          backgroundColor: '#2F59ED',
        }}
      >
        <Flex justify="space-between" align="center" marginBottom="-20px">
          <Box cursor="pointer" onClick={handleBackClick}>
            <Icon size="big" inverted name="long arrow alternate left" style={{margin: 0}}/>
          </Box>
          <Box cursor="pointer" onClick={handleBackClick}>
            <Icon size="large" inverted name="close" style={{margin: 0}}/>
          </Box>
        </Flex>
        <Header as='h1' inverted textAlign="center">Увійти</Header>
        <SignInForm onSubmit={handleSubmit} />
        <Box
          marginBottom="10px"
          marginTop="10px"
          textAlign="center"
          color="white"
        >Досі без акаунта?</Box>
        <Button
          type="button"
          size="big"
          inverted
          circular
          onClick={handleSignUpClick}
          style={{
            width: 'calc(100% - 50px)',
            alignSelf: 'center'
          }}
        >
          Зареєструватись
        </Button>
      </Flex>
    </Flex>
  );
};

export default SignIn;
