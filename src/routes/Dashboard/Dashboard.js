import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import PillCard from '../../components/PillCard';
import PillCreatorGoToButton from '../../containers/PillCreatorGoToButton';

export default class Dashboard extends Component {

  static navigationOptions = {
    headerTitle: 'PillAlert',
    headerRight: <PillCreatorGoToButton />,
  };

  static propTypes = {
    prescriptions: PropTypes.array.isRequired,
    takeDose: PropTypes.func.isRequired,
  }

  _renderCard = ({ item }) => (
    <PillCard onPressCompleteTask={() => this.props.takeDose(item.key)} {...item} />
  );

  render = () => (
    <FlatList
      style={{ backgroundColor: 'rgb(253, 165, 41)', paddingTop: 10, paddingBottom: 10, flex: 1 }}
      data={this.props.prescriptions}
      renderItem={this._renderCard}
      keyExtractor={item => toString(item.key)}
    />
  );

}
