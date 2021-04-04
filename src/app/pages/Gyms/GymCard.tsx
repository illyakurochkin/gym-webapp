import React from 'react';
import { Flex } from '@chakra-ui/react';
import {Image} from "semantic-ui-react";
import {Gym} from "../../../imports/api";

interface Props {
  gym: Gym,
}
const GymCard = ({gym}: Props) => {
  return (
    <Flex
      direction="row"
      padding="30px"
      height="220px"
      backgroundColor="white"
    >
      <Flex
        direction="column"
      >
        {JSON.stringify(gym)}
      </Flex>
      <Image src=""/>
    </Flex>
  );
};

export default GymCard;
