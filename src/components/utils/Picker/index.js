import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FormContext } from '../Form';
import Block from '../Block';
import Text from '../Text';

import RNPicker from './styles';

export default function Picker({ name, label, data, ...rest }) {
  const { values, errors, onChange } = useContext(FormContext);

  return (
    <Block>
      {label && (
        <Block distance={[0, 5]}>
          <Text>{label}</Text>
        </Block>
      )}
      <RNPicker
        selectedValue={values[name]}
        onValueChange={value => onChange({ name, value })}
        {...rest}
      >
        <RNPicker.Item label="Pick a item" value={null} />
        {data.map(it => (
          <RNPicker.Item
            key={({ item }) => String(item.id)}
            label={it.label}
            value={it.id}
          />
        ))}
      </RNPicker>
      <Block distance={[0, 5]}>
        <Text grey3>{errors[name]}</Text>
      </Block>
    </Block>
  );
}

Picker.defaultProps = {
  label: null,
};

Picker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
    })
  ).isRequired,
};
