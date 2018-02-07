import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, View, Text, TextInput, StyleSheet } from 'react-native';

export default class InputField extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    style: View.propTypes.style,
    textInputStyle: TextInput.propTypes.style,
  };

  static defaultProps = {
    style: null,
    textInputStyle: null,
  };

  _focusInput = () => {
    this.input.focus();
  };

  render = () => {
    const { label, style, textInputStyle, ...other } = this.props;
    return (
      <TouchableWithoutFeedback onPress={this._focusInput}>
        <View style={[styles.form, style]}>
          <View>
            <Text style={styles.label}>{label}</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              ref={(input) => { this.input = input; }}
              style={[styles.input, textInputStyle]}
              {...other}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };
}

const styles = StyleSheet.create({
  form: { minHeight: 60, paddingHorizontal: 10, paddingVertical: 10 },
  label: { fontWeight: '700', fontSize: 15 },
  inputView: { paddingVertical: 5 },
  input: { fontSize: 17 },
});
