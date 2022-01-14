import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cajaVerde} />
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: 'tomato',
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    top: 10,
    right: 0,
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  cajaVerde: {
    backgroundColor: '#49f56f',
    borderColor: 'white',
    borderWidth: 10,
    // width: 100,
    // height: 100,
    // position: 'absolute',
    // bottom: 10,
    ...StyleSheet.absoluteFillObject,
  },
});
