import React, {useState, useEffect, useCallback} from 'react'
import { ScrollView, RefreshControl, StyleSheet } from 'react-native';

// UI Components
import {Contact} from '../components/Contact';

// Colors
import colors from '../assets/colors/colors';

// Dataset
import data from '../data/data.json';

const ContactsListScreen = ({route}) => {
  const [contacts, setContacts] = useState(data);
  const [refreshing, setRefreshing] = useState(false);
  // Assumption: Data is in local state, no requirement to append changes to json file.
  useEffect(() => {
    if (route.params?.changedContact) {
      const changedContact = route.params.changedContact;
      const contactToReplaceIndex = contacts.findIndex((contact) => contact.id === changedContact.id);

      let updatedContacts = [...contacts];
      updatedContacts.splice(contactToReplaceIndex, 1, changedContact);

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
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      {contacts.map((contact) => {
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
