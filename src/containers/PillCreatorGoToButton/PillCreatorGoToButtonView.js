import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({ navigateTo }) => (
  <TouchableOpacity
    onPress={navigateTo}
    style={{ paddingHorizontal: 10 }}
  >
    <Text style={styles.buttonText}>Add New</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonText: { color: 'rgb(140, 193, 82)', fontSize: 18, fontWeight: '400' },
});
