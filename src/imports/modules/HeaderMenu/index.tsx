import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Header } from 'semantic-ui-react';
import Menu from './Menu';
import AuthButton from "./AuthButton";
import CreateWorkoutButton from "./CreateWorkoutButton";
import AuthorizedMenu from './AuthorizedMenu';
import {useLocation} from "react-router-dom";
import {useAuthorized} from "../../hooks/useAuthorized";

const HeaderMenu = () => {
  const {authorized} = useAuthorized();
  const {pathname} = useLocation();

  return (
    <Flex
      direction="column"
      padding="48px 76px 28px 76px"
    >
      <Flex
        direction="row"
        align="center"
        justify="space-between"
        marginBottom="20px"
      >
        <CreateWorkoutButton />
        <Flex direction="row" align="center">
          <Header style={{margin: 0, paddingRight: 20}}>7:00 – 22:30 EVERYDAY</Header>
          <AuthButton />
        </Flex>
      </Flex>
      <Menu />
      {authorized && pathname !== '/' && <AuthorizedMenu />}
    </Flex>
  );
};

export default HeaderMenu;
