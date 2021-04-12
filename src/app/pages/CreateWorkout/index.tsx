import React, {useEffect, useState} from 'react';
import {Button, Dropdown, Icon, List, Step} from 'semantic-ui-react';
import Layout from "../../../imports/components/Layout";
import api, {Gym} from "../../../imports/api";
import {Box, Flex} from '@chakra-ui/react';
import moment from 'moment';
import './index.css';
import {useHistory} from "react-router-dom";
import TimeRangeInput from "./TimeRangeInput";

const initialSteps = [
  {
    key: 'gym',
    icon: 'location arrow',
    title: 'Спортзал',
    description: 'Виберіть спортзал',
  },
  {
    key: 'timeRange',
    icon: 'calendar alternate',
    title: 'Дата',
    description: 'Виберіть дату тренування',
  },
  {
    key: 'coach',
    icon: 'user',
    title: 'Тренер',
    description: 'Виберіть вільного тренера (не обов\'язково)'
  },
]

const mapGymToOption = (gym: Gym) => {
  return ({
    key: gym.id,
    text: `${gym.city} ${gym.street} ${gym.house}`,
    value: gym,
    image: {avatar: true, src: gym.photo},
  })
};

const mapCoachToOption = (coach: any) => {
  return ({
    key: coach.id,
    text: `${coach.firstName} ${coach.lastName}`,
    value: coach,
    image: {avatar: true, src: coach.photo},
  })
}

const CreateWorkout = () => {
  const history = useHistory();

  const [gym, setGym] = useState<Gym | null>();
  const [timeRange, setTimeRange] = useState<any | null>();
  const [coach, setCoach] = useState<any | null>();
  const [active, setActive] = useState<string>('gym');

  const [gymsOptions, setGymsOptions] = useState<any[]>([]);
  const [gymsOptionsLoading, setGymsOptionsLoading] = useState<boolean>(false);
  const [coachesOptions, setCoachesOptions] = useState<any[]>([]);
  const [coachesOptionsLoading, setCoachesOptionsLoading] = useState<boolean>(false);

  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setGymsOptionsLoading(true);
    api.getGyms()
      .then((gyms: any) => setGymsOptions(gyms.map(mapGymToOption)))
      .then(() => setGymsOptionsLoading(false));
  }, []);

  useEffect(() => {
    if (gym && timeRange && timeRange.date && timeRange.startTime && timeRange.endTime) {
      setCoachesOptionsLoading(true);
      const date = moment(timeRange.date).format('YYYY-MM-DD');

      api.getAvailableCoaches(gym.id, `${date} ${timeRange.startTime}:00`,
        `${date} ${timeRange.endTime}:00`)
        .then((coaches: any) => setCoachesOptions(coaches.map(mapCoachToOption)))
        .then(() => setCoachesOptionsLoading(false));
    }
  }, [gym, timeRange]);

  const renderInputs = () => {
    if (active === 'gym') {
      return (
        <Dropdown
          loading={gymsOptionsLoading}
          placeholder='Виберіть спортзал'
          fluid
          selection
          options={gymsOptions}
          value={gym as any}
          onChange={(v: any, {value}: any) => {
            setGym(value);
            setCoach(null);
            setActive('timeRange')
          }}
        />
      );
    }

    if (active === 'timeRange') {
      return (
        <TimeRangeInput
          value={timeRange}
          onChange={(value: any) => {
            setTimeRange(value);
            setCoach(null);

            if (value && value.date && value.startTime && value.endTime) {
              setActive('coach')
            }
          }}
        />
      );
    }

    return (
      <Flex direction="column" align="flex-start">
        <Dropdown
          loading={coachesOptionsLoading}
          placeholder="Виберіть тренера (не обов'язково)"
          fluid
          selection
          options={coachesOptions}
          value={coach as any}
          onChange={(v: any, {value}: any) => setCoach(value)}
        />
      </Flex>
    )
  }

  const renderContent = () => {
    const gymLabel = `${gym?.city} ${gym?.street} ${gym?.house}`;
    const timeRangeLabel = timeRange && timeRange.date && timeRange.startTime && timeRange.endTime
      && moment(timeRange.date).format('YYYY-MM-DD') +
      ` ${timeRange.startTime} - ${timeRange.endTime}`
    const coachLabel = `${coach?.firstName} ${coach?.lastName}`;

    return (
      <List style={{paddingLeft: 20}}>
        <List.Item>
          <List.Icon name='location arrow'/>
          <List.Content>
            {'Gym: '}
            {gym ? <a>{gymLabel}</a> : '-'}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='calendar alternate'/>
          <List.Content>
            {'Time range: '}
            {timeRange ? <a>{timeRangeLabel}</a> : '-'}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name='user'/>
          <List.Content>
            {'Coach: '}
            {coach ? <a>{coachLabel}</a> : '-'}
          </List.Content>
        </List.Item>
      </List>
    );
  };

  const steps = initialSteps.map((step) => {
    return {...step, active: step.key === active, onClick: () => setActive(step.key)};
  });

  if (!gym) {
    Object.assign(steps[1], {disabled: true});
  }

  if (!timeRange || !timeRange.date || !timeRange.startTime || !timeRange.endTime) {
    Object.assign(steps[2], {disabled: true});
  }

  const handleCreateWorkoutClick = async () => {
    setLoading(true);
    await api.createWorkout({
      gymId: gym!.id,
      coachId: coach?.id,
      startTime: `${moment(timeRange.date).format('YYYY-MM-DD')} ${timeRange.startTime}:00`,
      endTime: `${moment(timeRange.date).format('YYYY-MM-DD')} ${timeRange.endTime}:00`,
    });
    setLoading(false);
    history.push('/workouts')
  };

  return (
    <Layout>
      <Flex direction="column">
        <Step.Group items={steps}/>
        <Flex direction="row" padding="20px" paddingTop="0">
          <Box flex="1">{renderInputs()}</Box>
          <Box flex="1">{renderContent()}</Box>
        </Flex>
      </Flex>
      <Flex padding="20px" direction="row" justify="flex-end">
        <Button
          primary
          disabled={!gym || !timeRange?.date || !timeRange?.startTime || !timeRange?.endTime || loading}
          onClick={handleCreateWorkoutClick}
          loading={loading}
        >
          <Icon name="check"/>
          Create Workout
        </Button>
      </Flex>
    </Layout>
  );
};

export default CreateWorkout;
