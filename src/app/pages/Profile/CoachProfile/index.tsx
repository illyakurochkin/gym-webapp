import React from 'react';
import Layout from "../../../../imports/components/Layout";
import {selectAccount} from "../../../../imports/store/account";
import {useSelector} from "react-redux";

const CoachProfile = () => {
  const account = useSelector(selectAccount);

  return (
    <Layout>
      CoachProfile
    </Layout>
  );
};

export default CoachProfile;
