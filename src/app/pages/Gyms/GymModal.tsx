import React, {useEffect, useState} from 'react';
import {Button, Header, Modal, } from "semantic-ui-react";
import api, {Gym} from "../../../imports/api";
import Loader from "react-loader-spinner";
import {Flex, Image} from "@chakra-ui/react";

interface Props {
  gym: Gym | null,
  onClose: () => any,
}

const GymModal = ({gym, onClose}: Props) => {
  const [stats, setStats] = useState<any>(null);
  console.log('stats', stats);

  useEffect(() => {
    if(gym) {
      api.getGymStats(gym.id)
        .then(setStats);
    }
  }, [gym]);

  const renderContent = () => {
    if(!stats) {
      return (
        <Modal.Content >
        <Flex align="center" justify="center" paddingTop="20px">
          <Loader
            type="Puff"
            color="#2F59ED"
            height={100}
            width={100}
          />
        </Flex>
          </Modal.Content>
      );
    }

    console.log('equipment', gym);

    return (
      <>
        <Modal.Content image style={{display: 'flex', flexDirection: 'column'}}>
          <Image src={`data:image/png;base64,${gym?.avatar}`} wrapped marginBottom="20px"/>
          <Modal.Description style={{display: 'flex', flexDirection: 'column'}}>
            <Header>{`м. ${gym?.city}, вул. ${gym?.street} ${gym?.house}`}</Header>
            <p>{gym?.email}</p>
            <Header>Спорядження:</Header>
            {(stats?.equipment || []).map((equipment: any) => (
              <Flex direction="row" align="center" borderBottom="1px dashed gray" padding="10px 0">
                <Flex minWidth="200px">
                  <Image src={equipment?.imageUrl} style={{maxHeight: 140}}/>
                </Flex>
                <Flex direction="column">
                  <h3>{equipment?.name}</h3>
                  <p><strong>Тип:</strong> {equipment?.type}</p>
                  <p><strong>Стан обладнання:</strong> {equipment?.equipmentCondition}</p>
                </Flex>
              </Flex>
            ))}
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button color='black' onClick={onClose}>
            Close
          </Button>
        </Modal.Actions>
      </>
    )
  }



  return (
    <Modal onClose={onClose} open={Boolean(gym)}>
      <Modal.Header>Gym details</Modal.Header>
      {renderContent()}
    </Modal>
  );
};

export default GymModal;
