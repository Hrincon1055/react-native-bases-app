import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> BoxObjectModel</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tomato',
  },
  title: {
    padding: 10,
    fontSize: 20,
    borderWidth: 2,
    // backgroundColor: 'tomato',
  },
});
