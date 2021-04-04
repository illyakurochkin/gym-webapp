import React from 'react';
import {Box, Flex} from "@chakra-ui/react";
import background from './background.png';
import {LogoIcon, SecondaryLogoIcon} from '../../../imports/icons';
import {Header} from 'semantic-ui-react';

const Home = () => {
  return (
    <Flex
      direction="column"
      align="center"
      backgroundImage={`url(${background})`}
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      padding="88px 0"
      minHeight="600px"
      backgroundColor="white"
    >
      <Box paddingBottom="20px">
        <LogoIcon/>
      </Box>
      <Box>
        <SecondaryLogoIcon/>
      </Box>
      <Header align="center" size="huge" style={{color: 'white', maxWidth: 620, fontSize: 40}}>
        Мережа спортзалів, що створена
        спеціально для тебе
      </Header>
    </Flex>

  );
};

export default Home;
