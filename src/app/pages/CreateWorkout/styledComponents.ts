import SemanticDatepicker from "react-semantic-ui-datepickers";
import styled from "styled-components";

export const Datepicker = styled(SemanticDatepicker)`
  width: 100%;
  
  & input::placeholder {
    color: #BFBFBFDE !important;
  }
`;
