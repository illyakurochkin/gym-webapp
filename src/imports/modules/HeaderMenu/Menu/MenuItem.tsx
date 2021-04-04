import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from "semantic-ui-react";

interface Props {
  path: string,
  selected: boolean,
  label: string,
}
const MenuItem = ({selected, label, path}: Props) => {
  return (
    <Link to={path}>
      <Button
        circular
        color={selected ? 'primary' : '' as any}
        style={{
          margin: 10,
          borderWidth: 0,
          backgroundColor: selected ? undefined : 'transparent'
        }}
      >
        {label}
      </Button>
    </Link>
  );
};

export default MenuItem;
