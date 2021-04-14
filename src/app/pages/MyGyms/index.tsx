import React from 'react';
import Layout from "../../../imports/components/Layout";
import Loader from "react-loader-spinner";
import {useAsync} from "react-use";
import api, {Gym} from "../../../imports/api";
import {Flex} from '@chakra-ui/react';
import Card from "../../../imports/components/Card";
import {Header} from 'semantic-ui-react';
import { useState } from 'react';
import GymModal from '../Gyms/GymModal';
import {selectAccount} from "../../../imports/store/account";
import {useSelector} from "react-redux";

const MyGyms = () => {
  const account = useSelector(selectAccount);
  const [selectedGym, setSelectedGym] = useState<Gym | null>(null);

  const {loading, value: gyms} = useAsync(() => api.getCoachGyms(account!.id),
    [account!.id]);

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

    return (gyms || []).map((gym: Gym) => {
      console.log('gym', gym);
      return (
        <Card
          key={gym.id}
          photo={`data:image/png;base64,${gym.avatar}`}
          onClick={() => setSelectedGym(gym)}
          style={{cursor: 'pointer'}}
          title={`м. ${gym.city}, вул. ${gym.street} ${gym.house}`}
        >
          <Flex direction="column">
            <Header>{gym.email}<br/>{gym.phone}</Header>
          </Flex>
        </Card>
      );
    });
  }

  console.log('here');
  return (
    <>
      <Layout>
        {renderContent()}
      </Layout>
      <GymModal gym={selectedGym} onClose={() => setSelectedGym(null)}/>
    </>
  );
};

export default MyGyms;
