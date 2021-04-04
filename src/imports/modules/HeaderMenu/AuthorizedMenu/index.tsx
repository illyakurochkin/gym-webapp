import React from 'react';
import {Flex} from '@chakra-ui/react';
import MenuItem from "./MenuItem";
import {ProfileActiveIcon, ProfileDisabledIcon, WorkoutsActiveIcon, WorkoutsDisabledIcon} from "../../../icons";
import {useLocation} from "react-router-dom";

const AuthorizedMenu = () => {
  const {pathname} = useLocation();

  return (
    <Flex direction="row" align="center" justify="center">
      <MenuItem
        activeIcon={<ProfileActiveIcon/>}
        disabledIcon={<ProfileDisabledIcon/>} label="Мій профіль"
        selected={pathname === '/profile'}
        path="/profile"
      />
      <MenuItem
        activeIcon={<WorkoutsActiveIcon/>}
        disabledIcon={<WorkoutsDisabledIcon/>} label="Мої тренування"
        selected={pathname === '/workouts'}
        path="/workouts"
      />
    </Flex>
  );
};

export default AuthorizedMenu;
