import React from 'react';
import { Box } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Layout from "../../../imports/components/Layout";
import { Header } from 'semantic-ui-react';
import Card from "../../../imports/components/Card";
import photo1 from '../WorkoutsTypes/images/photo1.png';
import photo2 from '../WorkoutsTypes/images/photo2.png';
import photo3 from '../WorkoutsTypes/images/photo3.png';

const subscriptions = [
  {label: '4 персональні тренування на місяць', photo: photo1},
  {label: '8 персональних тренувань на місяць', photo: photo2},
  {label: '4 групові тренування на місяць', photo: photo3},
  {label: '8 групових тренувань на місяць', photo: photo1},
];
//https://www.google.com/url?sa=i&url=https%3A%2F%2Ftime.com%2F5795492%2Fgym-fitness-studio-coronavirus%2F&psig=AOvVaw1kpGRFZu4R99a3So9l2b3o&ust=1618488856942000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID5g_7a_e8CFQAAAAAdAAAAABAJ
//https://nypost.com/wp-content/uploads/sites/2/2020/03/gettyimages-1049840750.jpg?quality=80&strip=all&w=618&h=410&crop=1

//https://nypost.com/wp-content/uploads/sites/2/2020/03/gettyimages-1049840750.jpg?quality=80&strip=all&w=618&h=410&crop=1
//https://pbs.twimg.com/media/EUSJirFXgAEKHtd.jpg

const Subscriptions = () => {
  return (
    <Layout>
      {subscriptions.map((subscription) => (
        <Card height="100px" photo={subscription.photo}>
          <Header color="blue" style={{width: '100%'}} align="center" size="large">{subscription.label}</Header>
        </Card>
      ))}
    </Layout>
  );
};

export default Subscriptions;
