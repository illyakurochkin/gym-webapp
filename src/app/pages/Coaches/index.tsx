import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Layout from "../../../imports/components/Layout";
import Loader from "react-loader-spinner";
import { useAsync } from "react-use";
import api, { Coach } from "../../../imports/api";
import Card from "../../../imports/components/Card";
import { Header } from 'semantic-ui-react';
import photo1 from './images/photo1.png';

const Coaches = () => {
  const {loading, value: coaches} = useAsync(api.getCoaches, []);
  
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

    return (coaches || [] as any).map((coach: Coach) => (
      <Card
        key={coach.id}
        photo={photo1}
        title={`${coach.firstName} ${coach.lastName}`}
      >
        <Flex direction="column">
          <Header>Ранг: {coach.rang}<br/>Ціна заняття: {coach.payment}₴/год</Header>
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

export default Coaches;
