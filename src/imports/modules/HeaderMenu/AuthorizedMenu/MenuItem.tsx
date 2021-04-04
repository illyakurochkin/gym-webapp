import {Box, Flex} from '@chakra-ui/react';
import React from 'react';
import {Link} from 'react-router-dom';

interface Props {
  activeIcon: JSX.Element | null,
  disabledIcon: JSX.Element | null
  label: string,
  selected: boolean,
  path: string,
}

const MenuItem = ({selected, activeIcon, disabledIcon, label, path}: Props) => {
  return (
    <Link to={path}>
      <Flex
        direction="row"
        align="center"
        margin="0 20px"
        paddingTop="10px"
      >
        <Box paddingRight="10px">
          {selected ? activeIcon : disabledIcon}
        </Box>

        <Box
          as="h4"
          margin="0"
          paddingBottom="3px"
          color={selected ? 'black' : '#828190'}
          _hover={{color: 'black'}}
        >
          {label}
        </Box>
      </Flex>
    </Link>
  );
};

export default MenuItem;
