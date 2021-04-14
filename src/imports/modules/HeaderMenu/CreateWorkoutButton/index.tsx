import React from 'react';
import {Button} from "semantic-ui-react";
import {useAuthorized} from "../../../hooks/useAuthorized";
import {useHistory} from "react-router-dom";

const CreateWorkoutButton = () => {
  const {authorized, role} = useAuthorized();
  const history = useHistory();

  const handleClick = () => {
    if(!authorized) {
      history.push('/login');
    } else {
      history.push('/create-workout');
    }
  }

  if(!authorized || role === 'ROLE_CLIENT') {
    return (
      <Button
        primary
        circular
        onClick={handleClick}
      >✍🏻 Записатися на тренування</Button>
    );
  }

  return <div />;
};

export default CreateWorkoutButton;
