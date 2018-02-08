import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class PillCard extends PureComponent {

  static propTypes = {
    drugName: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    // cautions: PropTypes.arrayOf(PropTypes.shape({
    //   key: PropTypes.string,
    //   value: PropTypes.string,
    // })).isRequired,
    cautions: PropTypes.string.isRequired,
    pillCount: PropTypes.number.isRequired,
    dosesPerDay: PropTypes.number.isRequired,
    pillsPerDose: PropTypes.number.isRequired,
    nextNotification: PropTypes.number.isRequired,
    onPressCompleteTask: PropTypes.func.isRequired,
  };

  _isActive = () => this.props.nextNotification <= Date.now();

  _needsRefill = () => this.props.pillCount < 2 * (this.props.dosesPerDay * this.props.pillsPerDose)

  _getHoursLeft = () => ((this.props.nextNotification - Date.now()) / 3600000).toFixed(2)

  _renderTitle = () => (
    <View style={styles.title}>
      <Text style={styles.titleText}>{this.props.drugName}</Text>
    </View>
  );

  // _renderCautionItem = ({ key, value }) => (
  //   <Text style={styles.cautionItem} key={key}>{value}</Text>
  // );

  _renderActions = () => (
    <View style={styles.actions}>
      {this._renderRefillButton()}
      {this._renderCompleteTaskButton()}
    </View>
  );

  _renderRefillButton = () => (this._needsRefill() ? (
    <View style={styles.refillButtonActive}>
      <Text style={[styles.buttonLargeText]}>{this.props.pillCount}</Text>
      <Text style={[styles.buttonSmallText]}>NEED REFILL?</Text>
    </View>
  ) : (
    <View style={styles.refillButtonDisabled}>
      <Text style={[styles.buttonLargeText, styles.buttonTextDisabled]}>{this.props.pillCount}</Text>
      <Text style={[styles.buttonSmallText, styles.buttonTextDisabled]}>COUNT</Text>
    </View>
  ));

  _renderCompleteTaskButton = () => (this._isActive() ? (
    <TouchableOpacity onPress={this.props.onPressCompleteTask} style={[styles.completeTaskButton, styles.completeTaskButtonActive]}>
      <Text style={[styles.buttonLargeText]}>TAKE DOSE NOW</Text>
    </TouchableOpacity>
  ) : (
    <View style={[styles.completeTaskButton, styles.completeTaskButtonDisabled]}>
      <Text style={[styles.buttonLargeText, styles.buttonTextDisabled]}>TAKE DOSE IN {this._getHoursLeft()} HRS...</Text>
    </View>
  ));

  render = () => (
    <View style={styles.card}>
      {this._renderTitle()}
      <View style={styles.cardInnerPadding}>
        <Text style={styles.descText}>{this.props.instructions}</Text>
      </View>
      <View style={styles.cardInnerPadding}>
        <Text style={styles.cautionItem}>{this.props.cautions}</Text>
      </View>
      {this._renderActions()}
    </View>
  );
}


const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
    margin: 10,
  },
  title: {
    backgroundColor: '#FFFF00',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    margin: 5,
    padding: 5,
  },
  titleText: {
    fontWeight: '800',
    fontSize: 17,
  },
  descText: {
    fontWeight: '400',
    fontSize: 17,
  },
  cardInnerPadding: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  cautionItem: {
    fontWeight: '700',
    fontSize: 14,
    color: 'rgb(209, 49, 53)',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'stretch',
    margin: 5,
    height: 60,
  },
  refillButtonDisabled: {
    backgroundColor: 'rgb(229, 229, 229)',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  refillButtonActive: {
    backgroundColor: '#ef5350',
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 5,
    borderBottomColor: '#e53935',
  },
  completeTaskButton: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 5,
  },
  completeTaskButtonActive: {
    backgroundColor: 'rgb(140, 193, 82)',
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: 'rgb(126, 175, 74)',
  },
  completeTaskButtonDisabled: {
    backgroundColor: 'rgb(229, 229, 229)',
  },
  buttonLargeText: {
    fontSize: 17,
    fontWeight: '800',
    textAlign: 'center',
  },
  buttonSmallText: {
    fontSize: 10,
    fontWeight: '800',
    textAlign: 'center',
  },
  buttonTextDisabled: {
    color: 'rgb(128, 128, 128)',
  },
});
