import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import InputField from '../components/InputField';

const Separator = () => (
  <View style={{ height: 0.5, marginLeft: 10, backgroundColor: 'black', opacity: 0.3 }} />
);

export default class PillCreationForm extends Component {

  static propTypes = {

  };

  state = {

  };

  render = () => (
    <View style={{ backgroundColor: 'white', borderRadius: 5 }} number={-100} behavior="padding">
      <InputField label="Drug Name" placeholder="IBUPROFEN 600MG TABLET" textInputStyle={{ fontSize: 17, fontWeight: '700' }} autoCapitalize="characters" returnKeyType="next" autoFocus />
      <Separator />
      <InputField label="Instructions" placeholder="Take 1 tablet by mouth four times a day as needed for pain/fever." multiline autoGrow />
      <Separator />
      <InputField label="Cautions" placeholder="Take with food and milk. Do not exceed 3200mg per day." multiline autoGrow />
      <Separator />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <InputField style={{ flex: 1 }} label="Pill Count" placeholder="30" keyboardType="number-pad" />
        <InputField style={{ flex: 1 }} label="Doses/day" placeholder="4" keyboardType="number-pad" />
        <InputField style={{ flex: 1 }} label="Pills/dose" placeholder="1" keyboardType="number-pad" />
      </View>
      <Separator />
      <InputField label="Rx Number" placeholder="123456-12" keyboardType="number-pad" />
    </View>
  );

}

// ['drugName', 'instructions', 'cautions', 'pillCount', 'dosesPerDay', 'pillsPerDose', 'rx']
