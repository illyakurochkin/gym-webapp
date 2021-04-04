import React from 'react';
import {Flex} from '@chakra-ui/react';
import {Menu} from 'semantic-ui-react';
import MenuItem from './MenuItem';
import {Link, useLocation} from "react-router-dom";
import {useAuthorized} from "../../../hooks/useAuthorized";

interface Item {
  label: string,
  path: string,
}

const privateItems = [
  {label: '👤 Мій профіль', path: '/profile'},
  {label: '📝 Мої тренування', path: '/workouts'},
];

const publicItems: Item[] = [
  {label: '🏋 Спортзали', path: '/gyms'},
  {label: '🥊 Тренери', path: '/coaches'},
  {label: '🚀 Види тренувань', path: '/workouts-types'},
  {label: '🔥 Абонементи', path: '/subscriptions'},
  {label: '📍 Про нас', path: '/about'},
];

const MenuComponent = () => {
  const {pathname} = useLocation();
  const {authorized} = useAuthorized();

  const items = [...(authorized ? privateItems : []), ...publicItems];

  const renderItem = ({label, path}: Item) => (
    <MenuItem
      label={label}
      key={label}
      selected={pathname === path}
      path={path}
    />
  );

  const renderMenuItem = ({label, path}: Item) => (
    <Link to={path}>
      <Menu.Item
        name={path}
        active={pathname === path}
        style={{borderRadius: 4}}
      >
        {label}
      </Menu.Item>
    </Link>
  );


  const renderMenu = () => (
    <Flex justify="center">
      <Menu
        inverted
        color="blue"
        compact
        style={{flexWrap: 'wrap', justifyContent: 'center'}}
      >
        {items.map(renderMenuItem)}
      </Menu>
    </Flex>
  );

  if (true) {
    return renderMenu();
  }

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
