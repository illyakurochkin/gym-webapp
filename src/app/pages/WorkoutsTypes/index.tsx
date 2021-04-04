import React from 'react';
import Layout from '../../../imports/components/Layout';
import photo1 from './images/photo1.png';
import photo2 from './images/photo2.png';
import photo3 from './images/photo3.png';
import Card from "../../../imports/components/Card";

const workoutsTypes = [
  {
    title: 'TRX',
    description: 'Класи з використанням строп TRX націлені на опрацювання всіх м\'язів тіла. Вибирай той, який підходить саме тобі, спираючись на рівень підготовки і цілі.',
    photo: photo1,
  },
  {
    title: 'Кардіо',
    description: 'Вибирай клас і прокачувати силу, витривалість, швидкість, баланс, спритність і зовнішні параметри тіла.',
    photo: photo2,
  },
  {
    title: 'Кросфіт',
    description: 'Система кругових тренувань, яка допомагає максимально ефективно опрацювати всі групи м\'язів.',
    photo: photo3,
  },
]
const WorkoutsTypes = () => {
  return (
    <Layout>
      {workoutsTypes.map(({title, description, photo}) => (
        <Card key={title} title={title} photo={photo}>{description}</Card>
      )) as any}
    </Layout>
  );
};

export default WorkoutsTypes;
