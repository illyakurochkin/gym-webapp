import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Layout from "../../../imports/components/Layout";
import { Header } from 'semantic-ui-react';
import Card from "../../../imports/components/Card";

const subscriptions = [
  '4 персональні тренування на місяць',
  '8 персональних тренувань на місяць',
  '4 групові тренування на місяць',
  '8 групових тренувань на місяць'
];

const Subscriptions = () => {
  return (
    <Layout>
      {subscriptions.map((subscription) => (
        <Card height="100px">
          <Header color="blue" style={{width: '100%'}} align="center" size="large">{subscription}</Header>
        </Card>
      ))}
    </Layout>
  );
};

export default Subscriptions;
