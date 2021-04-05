import React from 'react';
import {useSelector} from "react-redux";
import {Flex} from '@chakra-ui/react';
import {Image} from 'semantic-ui-react';
import {selectAccount} from '../../../../imports/store/account';
import Layout from '../../../../imports/components/Layout';

const ClientProfile = () => {
  const account = useSelector(selectAccount);

  return (
    <Layout>
      <Flex direction="row" align="flex-end">
        <Image circular src={account?.photo}/>
      </Flex>
      ClientProfile
    </Layout>
  );
};

export default ClientProfile;
