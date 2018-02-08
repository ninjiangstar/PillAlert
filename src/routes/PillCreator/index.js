import React, { Component } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import PillCreationForm from '../../containers/PillCreationForm';
import PillCreatorCancelButton from '../../containers/PillCreatorCancelButton';

export default class Dashboard extends Component {

  static navigationOptions = {
    headerTitle: 'New Prescription',
    headerLeft: <PillCreatorCancelButton />,
  };

  render = () => (
    <KeyboardAwareScrollView style={{ backgroundColor: 'rgb(253, 165, 41)', flex: 1, paddingVertical: 20, paddingHorizontal: 10 }} extraScrollHeight={40}>
      <PillCreationForm />
    </KeyboardAwareScrollView>
  );

}
