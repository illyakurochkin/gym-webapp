import {Flex} from '@chakra-ui/react';
import React from 'react';
import {Datepicker, Timepicker} from "./styledComponents";

// import {TimeInput as Timepicker} from 'semantic-ui-calendar-react';


interface ValueType {
  startTime: string,
  endTime: string,
  date: Date,
}

interface Props {
  value: ValueType,
  onChange: (value: ValueType) => any
}

const TimeRangeInput = ({value, onChange}: Props) => {
  const {startTime, date, endTime} = value || {};
  console.log('value', value);
  return (
    <Flex direction="column">
      <Datepicker
        value={date || null}
        placeholder="Виберіть дату"
        onChange={(event: any, {value}: any) => {
          onChange({startTime, date: value, endTime});
        }}
      />
      <Flex direction="row" justify="space-between">
        <Timepicker
          disableMinute
          value={startTime || null}
          placeholder="Виберіть час початку"
          name="startTime"
          id="startTime"
          style={{marginRight: 10, flex: 1}}
          onChange={(event: any, {value}: any) => {
            onChange({startTime: value, date, endTime})
          }}
        />
        <Timepicker
          closeOnMouseLeave
          disableMinute
          value={endTime || null}
          placeholder="Виберіть час кінця"
          name="endTime"
          id="endTime"
          style={{flex: 1}}
          onChange={(event: any, {value}: any) => {
            onChange({startTime, date, endTime: value})
          }}
        />
      </Flex>
    </Flex>
  );
};

export default TimeRangeInput;
