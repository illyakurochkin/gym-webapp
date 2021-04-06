import React from 'react';
import {Button, Form, Input} from 'semantic-ui-react';
import {useForm} from "react-hook-form";
import {Flex} from '@chakra-ui/react';
import {Radio} from './styledComponents';

export interface FormValues {
  firstName: string,
  lastName: string,
  sex: string,
  email: string,
  password: string
}

interface Props {
  onSubmit: (data: FormValues) => any
}

const SignUpForm = ({onSubmit}: Props) => {
  const {register, handleSubmit, watch, formState: {isSubmitting}} = useForm();
  const password = watch('password');

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column">
        <Form.Field>
          <Input
            basic
            type="text"
            name="firstName"
            size="big"
            placeholder="Ім'я"
            input={{
              ref: register({
                required: 'Обов\'язкове поле',
              }),
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
            type="text"
            name="lastName"
            size="big"
            placeholder="Прізвище"
            input={{
              ref: register({
                required: 'Обов\'язкове поле',
              }),
              style: {
                borderRadius: 40,
                border: '1px solid white',
                backgroundColor: 'transparent',
                color: 'white'
              }
            }}
          />
        </Form.Field>
        <Flex direction="row">
          <Form.Field>
            <Radio
              label='Жінка'
              name='sex'
              value='F'
              ref={register}
              style={{
                paddingLeft: 10,
                color: 'white'
              }}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Чоловік'
              name='sex'
              value='M'
              ref={register}
              style={{
                paddingLeft: 10,
                color: 'white'
              }}
            />
          </Form.Field>
        </Flex>
        <Form.Field>
          <Input
            basic
            type="email"
            name="email"
            size="big"
            placeholder="Email"
            input={{
              ref: register({
                required: 'Обов\'язкове поле',
                minLength: 5,
              }),
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
            placeholder="Пароль"
            input={{
              ref: register({
                required: 'Обов\'язкове поле',
              }),
              style: {
                borderRadius: 40,
                border: '1px solid white',
                backgroundColor: 'transparent',
                color: 'white',
              }
            }}
          />
        </Form.Field>
        <Form.Field>
          <Input
            basic
            size="big"
            type="password"
            name="repeatPassword"
            placeholder="Повторити пароль"
            input={{
              ref: register({
                required: 'Обов\'язкове поле',
                validate: (repeatPassword: string) => repeatPassword !== password
                  ? 'Паролі не співпадають' : undefined
              }),
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
          Зареєструватись
        </Button>
      </Flex>
    </Form>
  );
};

export default SignUpForm;
