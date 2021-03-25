import React from 'react';
import {Button, Form, Input} from 'semantic-ui-react';
import {useForm} from "react-hook-form";
import {Flex, Box} from '@chakra-ui/react';
import {css} from "@emotion/react";

export interface FormValues {
  email: string,
  password: string,
}

interface Props {
  onSubmit: (data: FormValues) => any,
}

const SignInForm = ({onSubmit}: Props) => {
  const {register, handleSubmit, formState: {isSubmitting}} = useForm();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column">
        <Form.Field>
          <Input
            basic
            type="email"
            name="email"
            size="big"
            placeholder="Email"
            input={{
              ref: register,
              style: {
                borderRadius: 40,
                border: '1px solid white',
                backgroundColor: 'transparent',
                color: 'white'
              }
            }}
          />
        </Form.Field>
        <Form.Field>
          <Input
            basic
            size="big"
            type="password"
            name="password"
            placeholder="Password"
            input={{
              ref: register,
              style: {
                borderRadius: 40,
                marginBottom: 10,
                border: '1px solid white',
                backgroundColor: 'transparent',
                color: 'white',
              }
            }}
          />
        </Form.Field>
        <Box
          marginBottom="10px"
          marginTop="-10px"
          textAlign="center"
          color="white"
          cursor="pointer"
          css={css`
            :hover {
              text-decoration: underline;
            }
          `}
        >Забули пароль?</Box>
        <Button
          type="submit"
          loading={isSubmitting}
          size="big"
          inverted
          circular
          style={{
            margin: 0,
            backgroundColor: 'white',
            color: 'rgba(0,0,0,.8)',
            width: 'calc(100% - 50px)',
            alignSelf: 'center'
          }}
        >
          Увійти
        </Button>
      </Flex>
    </Form>
  );
};

export default SignInForm;
