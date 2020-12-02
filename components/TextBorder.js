import React from 'react';
import {View, Text} from 'react-native';

export const TextBorder = ({text}) => {
  return (
    <View
      style={{
        backgroundColor: '#F6F6F6'
      }}>
      <Text
        style={{
          paddingVertical: 7,
          paddingHorizontal: 20,
          fontWeight: '600',
          fontSize: 20
        }}>
        {text}
      </Text>
    </View>
  );
}