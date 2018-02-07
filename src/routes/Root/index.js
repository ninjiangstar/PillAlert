import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';
import NavigationActions from '../../redux/NavigationActions';

class RootRouter extends Component {

  static propTypes = {
    navigateToDashboard: PropTypes.func.isRequired,
  };

  componentWillMount = () => {
    this.props.navigateToDashboard();
  }

  render = () => <View />;
}

const mapDispatchToProps = dispatch => ({
  navigateToNewsletter() {
    dispatch(NavigationActions.resetToNewsletter());
  },
});

export default connect(
  state => state,
  mapDispatchToProps,
)(RootRouter);
