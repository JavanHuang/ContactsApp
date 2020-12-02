import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

import colors from '../assets/colors/colors';

const navigateToContact = (contact) => {
  console.log(contact);
};

export const Contact = ({contact}) => {
  return (
    <TouchableOpacity
      onPress={() => navigateToContact(contact)}
      style={styles.contactContainer}>
      <View style={styles.circle} />
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
    paddingLeft: 10,
    fontSize: 20,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 60/2,
    backgroundColor: colors.CONTACT_ICON_COLOR
  }
});