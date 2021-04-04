import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import {LogoIcon, SecondaryLogoIcon, SocialNetworksIcon} from "../../icons";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align="center"
      backgroundColor="white"
      marginTop="-8px"
    >
      <Link to="/">
        <Flex
          direction="row"
          align="center"
          backgroundColor="#2F59ED"
          padding="12px 30px"
        >
          <Box
            transform="scale(0.8)"
            marginRight="-40px"
          >
            <LogoIcon />
          </Box>
          <Box
            transform="scale(0.7)"
            marginRight="-40px"
          >
            <SecondaryLogoIcon />
          </Box>
        </Flex>
      </Link>
      <Box paddingRight="40px">
        <SocialNetworksIcon />
      </Box>
    </Flex>
  );
};

export default Footer;
