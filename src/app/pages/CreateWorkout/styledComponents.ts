import styled from "styled-components";
import SemanticDatepicker from "react-semantic-ui-datepickers";
import {TimeInput} from 'semantic-ui-calendar-react';

export const Datepicker = styled(SemanticDatepicker)`
  width: 100%;
  
  & input::placeholder {
    color: #BFBFBFDE !important;
  }
`;

export const Timepicker = styled(TimeInput)`
  width: 100%;
  margin-top: 10px;

  & input::placeholder {
    color: #BFBFBFDE !important;
  }
`;
