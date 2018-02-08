import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Button, Keyboard, Text } from 'react-native';

import InputField from '../../components/InputField';

const Separator = () => (
  <View style={{ height: 0.5, marginLeft: 10, backgroundColor: 'black', opacity: 0.3 }} />
);

export default class PillCreationForm extends Component {

  static propTypes = {
    createPrescription: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  };

  state = {
    drugName: '',
    instructions: '',
    cautions: '',
    pillCount: '',
    dosesPerDay: '',
    pillsPerDose: '',
    rx: '',
    submitError: false,
  };

  _onChangeTextDrugName = (text) => {
    this.setState({ drugName: text.toUpperCase(), submitError: false });
  };

  _onChangeTextInstructions = (text) => {
    this.setState({ instructions: text, submitError: false });
  };

  _onChangeTextCautions = (text) => {
    this.setState({ cautions: text, submitError: false }); // each newline is a new item on the list
  };

  _onChangeTextPillCount = (text) => {
    this.setState({ pillCount: text.replace(/\D/g, ''), submitError: false }); // strip non-numeric characters
  };

  _onChangeTextDosesPerDay = (text) => {
    this.setState({ dosesPerDay: text.replace(/\D/g, ''), submitError: false }); // strip non-numeric characters
  };

  _onChangeTextPillsPerDone = (text) => {
    this.setState({ pillsPerDose: text.replace(/\D/g, ''), submitError: false }); // strip non-numeric characters
  };

  _onChangeTextRx = (text) => {
    this.setState({ rx: text, submitError: false });
  };

  _onPressCreate = () => {

    if (!this.state.drugName.length || !this.state.instructions.length || !this.state.pillCount.length || !this.state.dosesPerDay.length || !this.state.pillsPerDose.length) {
      this.setState({ submitError: true });
    } else {
      Keyboard.dismiss();
      this.props.createPrescription(this.state);
      this.props.pop();
    }
  };

  render = () => (
    <View style={{ backgroundColor: 'white', borderRadius: 5 }} number={-100} behavior="padding">
      <InputField
        label="Drug Name"
        value={this.state.drugName}
        onChangeText={this._onChangeTextDrugName}
        placeholder="IBUPROFEN 600MG TABLET"
        textInputStyle={{ fontSize: 17, fontWeight: '700' }}
        autoCapitalize="characters"
        returnKeyType="next"
        autoFocus
      />
      <Separator />
      <InputField
        label="Instructions"
        value={this.state.instructions}
        onChangeText={this._onChangeTextInstructions}
        placeholder="Take 1 tablet by mouth four times a day as needed for pain/fever."
        multiline
        autoGrow
      />
      <Separator />
      <InputField
        label="Cautions"
        value={this.state.cautions}
        onChangeText={this._onChangeTextCautions}
        placeholder="Take with food and milk. Do not exceed 3200mg per day."
        multiline
        autoGrow
      />
      <Separator />
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <InputField
          style={{ flex: 1 }}
          label="Pill Count"
          value={this.state.pillCount}
          onChangeText={this._onChangeTextPillCount}
          placeholder="30"
          keyboardType="number-pad"
        />
        <InputField
          style={{ flex: 1 }}
          label="Doses/day"
          value={this.state.dosesPerDay}
          onChangeText={this._onChangeTextDosesPerDay}
          placeholder="4"
          keyboardType="number-pad"
        />
        <InputField
          style={{ flex: 1 }}
          label="Pills/dose"
          value={this.state.pillsPerDose}
          onChangeText={this._onChangeTextPillsPerDone}
          placeholder="1"
          keyboardType="number-pad"
        />
      </View>
      <Separator />
      <InputField
        label="Rx Number"
        value={this.state.rx}
        onChangeText={this._onChangeTextRx}
        placeholder="123456-12"
      />
      <Separator />
      <View style={{ paddingVertical: 5 }}>
        <Button
          title="Create"
          color="rgb(140, 193, 82)"
          onPress={this._onPressCreate}
        />
        {this.state.submitError ? (<Text style={{
          color: 'rgb(209, 49, 53)',
          fontSize: 14,
          fontWeight: '700',
          textAlign: 'center',
        }}
        >Drug Name, Instructions, Pill Count, Doses/day, and Pills/dose are required.</Text>) : null}
      </View>
    </View>
  );

}

// ['drugName', 'instructions', 'cautions', 'pillCount', 'dosesPerDay', 'pillsPerDose', 'rx']
