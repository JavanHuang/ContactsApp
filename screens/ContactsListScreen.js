import React from 'react'
import { ScrollView, StyleSheet } from 'react-native';

// UI Components
import {Contact} from '../components/Contact';

// Colors
import colors from '../assets/colors/colors';

// Dataset
import data from '../data/data.json';

const ContactsListScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {data.map((contact) => {
        return <Contact key={contact.id} contact={contact}/>;
      }
      )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 20,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
});


export default ContactsListScreen;
