import React from 'react';
import {View, Text} from 'react-native';

export default function HolaMundoScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{fontSize: 45}}>Hola mundo</Text>
    </View>
  );
}
