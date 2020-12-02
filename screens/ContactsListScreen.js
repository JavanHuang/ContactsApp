import React, {useState, useEffect, useCallback} from 'react';
import { View, ScrollView, RefreshControl, StyleSheet } from 'react-native';

// Colors
import colors from '../assets/colors/colors';

// UI Components
import {Contact} from '../components/Contact';

// Dataset
import data from '../data/data.json';

const ContactsListScreen = ({route}) => {
  const [contacts, setContacts] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  // Assumption: Data is in local state, no requirement to append changes to json file.
  useEffect(() => {
    if (route.params?.action && route.params?.contact) {
      let updatedContacts = [...contacts];
      const {contact: changedContact, action} = route.params;

      if (action === 'save') {
        const contactToReplaceIndex = contacts.findIndex((contact) => contact.id === changedContact.id);
        updatedContacts.splice(contactToReplaceIndex, 1, changedContact);
      }

      if (action === 'add') {
        // temporary solution to generating unique keys for contact list
        changedContact.id = `${changedContact.firstName}_${changedContact.lastName}`
        updatedContacts.push(changedContact);
      }

      setContacts(updatedContacts);
    }
  }, [route]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setContacts(data);
    setRefreshing(false);
  }, [refreshing]);

  return (
    <ScrollView 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.container}>
        {contacts.map((contact) => {
            return <Contact key={contact.id} contact={contact}/>;
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 5,
    paddingLeft: 20,
    paddingBottom: 20,
    backgroundColor: colors.BACKGROUND_COLOR,
  },
});


export default ContactsListScreen;
