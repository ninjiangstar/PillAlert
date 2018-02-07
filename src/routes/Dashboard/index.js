import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PillCard from '../../components/PillCard';
import PillCreatorGoToButton from '../../containers/PillCreatorGoToButton';

export default class Dashboard extends Component {

  static navigationOptions = {
    headerTitle: 'PillAlert',
    headerRight: <PillCreatorGoToButton />,
  };

  state = {
    data: [
      {
        key: '0',
        title: 'IBUPROFEN 600 MG TABLET',
        desc: 'Take 1 tablet by mouth four times a day as needed for pain/fever.',
        cautions: [{ key: '0', value: 'Take with food or milk.' }, { key: '1', value: 'Do not exceed 3200mg per day.' }],
        count: 28,
        deadline: new Date('Feb 6, 2018 011:00:00'),
      },
      {
        key: '1',
        title: 'IBUPROFEN 600 MG TABLET',
        desc: 'Take 1 tablet by mouth four times a day as needed for pain/fever.',
        cautions: [{ key: '0', value: 'Take with food or milk.' }, { key: '1', value: 'Do not exceed 3200mg per day.' }],
        count: 28,
        deadline: new Date('Feb 6, 2018 011:00:00'),
      },
    ],
  };

  _renderCard = ({ item }) => (
    <PillCard {...item} />
  );

  render = () => (
    <FlatList
      style={{ backgroundColor: 'rgb(253, 165, 41)', paddingTop: 10, paddingBottom: 10, flex: 1 }}
      data={this.state.data}
      renderItem={this._renderCard}
    />
  );

}
