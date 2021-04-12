import { Flex } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[] | any,
}

const Layout = ({children}: Props) => {
  return (
    <Flex
      direction="column"
      maxWidth="850px"
      minHeight="500px"
      margin="0 auto 40px auto"
    >
      {children}
    </Flex>
  );
};

export default Layout;
