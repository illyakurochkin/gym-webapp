import React from 'react';
import {useSelector} from "react-redux";
import {Box, Flex} from '@chakra-ui/react';
import {Header, Image} from 'semantic-ui-react';
import {selectAccount} from '../../../../imports/store/account';
import Layout from '../../../../imports/components/Layout';
import {PhotoIcon} from '../../../../imports/icons';

const ClientProfile = () => {
  const account = useSelector(selectAccount);

  return (
    <Layout>
      <Flex direction="column" padding="20px">
        <Flex direction="row" align="flex-end">
          <Box position="relative">
            <Image
              circular
              src={`data:image/png;base64,${account?.avatar}`}
              style={{width: 100, height: 100, backgroundColor: 'green'}}
            />
            {false && (
              <Box
                position="absolute"
                bottom="-20px"
                right="-20px"
                transform="scale(0.6)"

              >
                <PhotoIcon/>
              </Box>
            )}
          </Box>
          <Box paddingLeft="10px" paddingBottom="10px">
            <Header style={{margin: 0}}>{`${account?.firstName} ${account?.lastName}`}</Header>
            <Header size="small" style={{fontWeight: 300, margin: 0}}>Кількість бонусів 256</Header>
          </Box>
        </Flex>
        <Header style={{paddingTop: 20, margin: 0, fontWeight: 400}}>Адреса електронної пошти: <span style={{color: 'blue'}}>{account?.email}</span></Header>
        <Header style={{margin: 0, fontWeight: 400}}>Номер телефону: <span style={{color: 'blue'}}>{account?.phoneNumber}</span></Header>
        <Header style={{margin: 0, fontWeight: 400}}>Дата народження: <span style={{color: 'blue'}}>{account?.birthDate}</span></Header>
      </Flex>
    </Layout>
  );
};

export default ClientProfile;
