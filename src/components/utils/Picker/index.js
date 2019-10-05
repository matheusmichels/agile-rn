import React, { useContext } from 'react';
import { Picker as RNPicker } from 'react-native';
import PropTypes from 'prop-types';

import { FormContext } from '../Form';

export default function Picker({ name, data, ...rest }) {
  const { values, onChange } = useContext(FormContext);

  return (
    <>
      <RNPicker
        selectedValue={values[name]}
        onValueChange={value => onChange({ name, value })}
        {...rest}
      >
        {data.map(item => (
          <Picker.Item label={item.label} value={item.id} />
        ))}
      </RNPicker>
    </>
  );
}

Picker.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};
