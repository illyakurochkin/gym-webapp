import React from 'react';
import { Flex } from '@chakra-ui/react';
import MenuItem from './MenuItem';
import {useLocation} from "react-router-dom";

interface Item {
  label: string,
  path: string,
}

const MenuComponent = () => {
  const {pathname} = useLocation();

  const items: Item[] = [
    {label: '🏋 Спортзали', path: '/gyms'},
    {label: '🥊 Тренери', path: '/coaches'},
    {label: '🚀 Види тренувань', path: '/workouts-types'},
    {label: '🔥 Абонементи', path: '/subscriptions'},
    {label: '☎️ Контакти', path: '/contacts'},
    {label: '📍 Про нас', path: '/about'},
  ];

  const renderItem = ({label, path}: Item) => (
    <MenuItem
      label={label}
      key={label}
      selected={pathname === path}
      path={path}
    />
  );

  return (
    <Flex
      direction="row"
      align="center"
      justify="center"
      width="100%"
      wrap="wrap"
      margin="0 10px"
    >
      {items.map(renderItem)}
    </Flex>
  );
};

export default MenuComponent;
