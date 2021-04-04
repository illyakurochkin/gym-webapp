import React from 'react';
import { Box } from '@chakra-ui/react';
import Layout from "../../../imports/components/Layout";
import { Loader } from 'semantic-ui-react';
import {useAsync} from "react-use";
import GymCard from './GymCard';
import api, {Gym} from "../../../imports/api";

const Gyms = () => {
  const {loading, value: gyms} = useAsync(api.getGyms, []);

  const renderContent = () => {
    if(loading) {
      return (
        <Box padding="20px">
          <Loader />
        </Box>
      );
    }

    return (gyms || [] as any).map((gym: Gym) => (
      <GymCard gym={gym} />
    ));
  }

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
};

export default Gyms;
