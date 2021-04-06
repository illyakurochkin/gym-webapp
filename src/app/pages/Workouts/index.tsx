import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Layout from "../../../imports/components/Layout";
import Loader from "react-loader-spinner";
import { useAsync } from "react-use";
import api, { Workout } from "../../../imports/api";
import Card from "../../../imports/components/Card";
import { Header } from 'semantic-ui-react';
import photo1 from './images/photo1.png';

const Workouts = () => {
  const {loading, value: workouts} = useAsync(api.getMyWorkouts, []);

  function formatDateTime(str: string): string {
    const date = new Date(str);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const hours = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    return `${day}.${month}.${year} ${hours}:${minutes}`;
  }
  
  const renderContent = () => {
    if (loading) {
      return (
        <Flex align="center" justify="center" paddingTop="20px">
          <Loader
            type="Puff"
            color="#2F59ED"
            height={100}
            width={100}
          />
        </Flex>
      );
    }

    return (workouts || []).map((workout: Workout) => (
      <Card
        key={workout.id}
        photo={photo1}
        title={`🕒${formatDateTime(workout.startTime)}`}
      >
        <Flex direction="column">
          <Header>bd — {workout.gym.street}<br/>Тренер: {workout.coach.firstName} {workout.coach.lastName}</Header>
        </Flex>
      </Card>
    ));
  }

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default Workouts;
