import React from 'react';
import WorkoutTypeCard, { WorkoutType } from './WorkoutTypeCard';
import Layout from '../../../imports/components/Layout';
import photo1 from './images/photo1.png';
import photo2 from './images/photo2.png';
import photo3 from './images/photo3.png';

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
      {workoutsTypes.map((workoutType: WorkoutType) => (
        <WorkoutTypeCard key={workoutType.title} workoutType={workoutType} />
      )) as any}
    </Layout>
  );
};

export default WorkoutsTypes;
