import React from 'react';
import {Flex} from '@chakra-ui/react';
import {Header, Image} from "semantic-ui-react";
import { Box } from '@chakra-ui/react';

export type WorkoutType = {
  title: string,
  description: string,
  photo: string,
};

interface Props {
  workoutType: WorkoutType
}

const WorkoutTypeCard = ({workoutType}: Props) => {
  return (
    <Flex
      direction="row"
      height="220px"
      marginBottom="20px"
      backgroundColor="white"
      borderRadius="10px"

    >
      <Flex direction="column" padding="20px" justify="center">
        <Header>{workoutType.title}</Header>
        <Box>{workoutType.description}</Box>
      </Flex>

      <Image
        src={workoutType.photo}
        style={{
          borderBottomRightRadius: 10,
          borderTopRightRadius: 10
        }}
      />
    </Flex>
  );
};

export default WorkoutTypeCard;
