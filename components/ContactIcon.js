import React from 'react';
import {View, StyleSheet} from 'react-native';

import colors from '../assets/colors/colors';

export const ContactIcon = ({size}) => {
  return (
    <View style={{
      width: size,
      height: size,
      borderRadius: size/2,
      backgroundColor: colors.THEME_COLOR
    }} />
  );
}