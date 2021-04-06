import React, {useEffect, useState} from 'react';
import {Dropdown, Step} from 'semantic-ui-react';
import Layout from "../../../imports/components/Layout";
import api, {Gym} from "../../../imports/api";

const friendOptions = [
  {
    key: 'Jenny Hess',
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: {avatar: true, src: '/images/avatar/small/jenny.jpg'},
  },
  {
    key: 'Elliot Fu',
    text: 'Elliot Fu',
    value: 'Elliot Fu',
    image: {avatar: true, src: '/images/avatar/small/elliot.jpg'},
  },
  {
    key: 'Stevie Feliciano',
    text: 'Stevie Feliciano',
    value: 'Stevie Feliciano',
    image: {avatar: true, src: '/images/avatar/small/stevie.jpg'},
  },
  {
    key: 'Christian',
    text: 'Christian',
    value: 'Christian',
    image: {avatar: true, src: '/images/avatar/small/christian.jpg'},
  },
  {
    key: 'Matt',
    text: 'Matt',
    value: 'Matt',
    image: {avatar: true, src: '/images/avatar/small/matt.jpg'},
  },
  {
    key: 'Justen Kitsune',
    text: 'Justen Kitsune',
    value: 'Justen Kitsune',
    image: {avatar: true, src: '/images/avatar/small/justen.jpg'},
  },
]

const initialSteps = [
  {
    key: 'gym',
    icon: 'location arrow',
    title: 'Gym',
    description: 'Choose your gym you want to use',
  },
  {
    key: 'date',
    icon: 'calendar alternate',
    title: 'Date',
    description: 'Choose day',
  },
  {
    key: 'coach',
    icon: 'user',
    title: 'Coach',
    description: 'Choose available coach (optional)'
  },
]

const CreateWorkout = () => {
  const [gym, setGym] = useState<Gym | null>();
  const [date, setDate] = useState<string | null>();
  const [coach, setCoach] = useState<any | null>();
  const [active, setActive] = useState<string>('gym');

  const [gymsOptions, setGymsOptions] = useState<any[]>([]);
  const [gymsOptionsLoading, setGymsOptionsLoading] = useState<boolean>(false);
  const [coachesOptions, setCoachesOptions] = useState<any[]>([]);
  const [coachesOptionsLoading, setCoachesOptionsLoading] = useState<boolean>(false);

  useEffect(() => {
    setGymsOptionsLoading(true);
    api.getGyms()
      .then((gyms: any) => setGymsOptions(gyms))
      .then(() => setGymsOptionsLoading(false));
  }, []);

  useEffect(() => {
    if (gym) {
      setCoachesOptionsLoading(true);
      api.getCoaches({gymId: gym.id, date})
        .then((coaches: any) => setCoachesOptions(coaches))
        .then(() => setCoachesOptionsLoading(false));
    }
  }, [gym, date]);

  const renderContent = () => {
    if (!gym) {
      return (
        <Dropdown
          loading={gymsOptionsLoading}
          placeholder='Select Gym'
          fluid
          selection
          options={gymsOptions}
          onChange={(v: any, data: any) => setGym(data)}
        />
      );
    }

    if(!date) {
      return null;
    }

    if(!coach) {
      return (
        <Dropdown
          loading={coachesOptionsLoading}
          placeholder='Select Coach (optional)'
          fluid
          selection
          options={coachesOptions}
          onChange={(v: any, data: any) => setCoach(data)}
        />
      )
    }
  }

  if (active === 'gym') {

  }
  const steps = initialSteps.map((step) => {
    return {...step, active: step.key === active};
  });

  if (!gym) {
    Object.assign(steps[1], {disabled: true});
  }

  if (!date) {
    Object.assign(steps[2], {disabled: true});
  }

  return (
    <Layout>
      <Step.Group items={steps}/>
      {renderContent()}
    </Layout>
  );
};

export default CreateWorkout;
