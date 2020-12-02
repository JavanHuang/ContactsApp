import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/colors/colors';

import {ContactIcon} from './ContactIcon';

export const Contact = ({contact}) => {
  const navigation = useNavigation();

  const navigateToContact = () => {
    navigation.navigate('IndividualContact', {contact});
  };
  
  return (
    <TouchableOpacity
      onPress={() => navigateToContact()}
      style={styles.contactContainer}>
      <ContactIcon size={60}/>
      <Text
        style={styles.text}>{contact.firstName} {contact.lastName}</Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  contactContainer: {
    paddingHorizontal: 2,
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomColor: colors.BORDER_COLOR,
    borderBottomWidth: 1
  },
  text: {
    alignSelf: 'center',
    color: colors.BLACK_FONT_COLOR,
    paddingLeft: 10,
    fontSize: 20,
  }
});