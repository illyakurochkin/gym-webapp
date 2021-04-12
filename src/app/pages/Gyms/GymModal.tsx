import React from 'react';
import {Button, Header, Modal, Image} from "semantic-ui-react";
import {Gym} from "../../../imports/api";

interface Props {
  gym: Gym | null,
  onClose: () => any,
}

const GymModal = ({gym, onClose}: Props) => {
  return (
    <Modal onClose={onClose} open={Boolean(gym)}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={onClose}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
          labelPosition='right'
          icon='checkmark'
          onClick={onClose}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
};

export default GymModal;
