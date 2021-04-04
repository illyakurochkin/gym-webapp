import { Flex } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: JSX.Element | JSX.Element[],
}

const Layout = ({children}: Props) => {
  return (
    <Flex
      direction="column"
      maxWidth="850px"
      minHeight="100px"
      border="1px solid red"
      margin="0 auto"
    >
      {children}
    </Flex>
  );
};

export default Layout;
