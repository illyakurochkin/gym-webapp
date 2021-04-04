import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import {Header, Image} from "semantic-ui-react";

interface Props {
  photo?: string,
  title?: string,
  children: any,
  height?: string
}

const Card = ({title, children, photo, height}: Props) => {
  return (
    <Flex
      direction="row"
      height={height || '220px'}
      marginBottom="20px"
      backgroundColor="white"
      borderRadius="10px"
    >
      <Flex direction="column" padding="20px" justify="center" flex="1">
        {title && <Header>{title}</Header>}
        <Box>{children}</Box>
      </Flex>

      {photo && (
        <Image
          src={photo}
          style={{
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10
          }}
        />
      )}
    </Flex>
  );
};

export default Card;

