import React from 'react';
import {Button} from "semantic-ui-react";
import {useAuthorized} from "../../../hooks/useAuthorized";
import {useHistory} from "react-router-dom";

const CreateWorkoutButton = () => {
  const {authorized} = useAuthorized();
  const history = useHistory();

  const handleClick = () => {
    if(!authorized) {
      history.push('/login');
    } else {
      history.push('/create-workout');
    }
  }

  return (
    <Button
      primary
      circular
      onClick={handleClick}
    >✍🏻 Записатися на тренування</Button>
  );
};

export default CreateWorkoutButton;
