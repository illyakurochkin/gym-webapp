import React from 'react';
import {useSelector} from "react-redux";
import {selectAccount} from "../../../imports/store/account";
import ClientProfile from "./ClientProfile";
import CoachProfile from './CoachProfile';
import GymProfile from './GymProfile';

const Profile = () => {
  const account = useSelector(selectAccount);

  if (account?.roles.includes('CLIENT')) {
    return <ClientProfile />;
  }

  if (account?.roles.includes('COACH')) {
    return <CoachProfile />;
  }

  if (account?.roles.includes('GYM')) {
    return <GymProfile />;
  }

  return null;
};

export default Profile;
