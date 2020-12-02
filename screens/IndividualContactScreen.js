import React, {useState} from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet } from 'react-native';

import colors from '../assets/colors/colors';

import {ContactIcon} from '../components/ContactIcon';
import {TextBorder} from '../components/TextBorder';

function IndividualContactScreen({route}) {
  const {contact} = route.params;
  console.log(contact);
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phone);
  
  // TO-DO: To abstract the text input containers
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.container}>
        <View
          style={{
            paddingTop: 20,
            paddingBottom: 40
          }}>
            <ContactIcon size={120}/>
          </View>
        <View
          style={{
            alignSelf: 'flex-start',
            width: '100%',
          }}>
            <TextBorder text={'Main Information'} />
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: colors.BORDER_COLOR,
                borderBottomWidth: 1,
                paddingHorizontal: 20,
                height: 60
            }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingRight: 10
                }}>First Name</Text>
              <TextInput
                style={{ height: 40, borderColor: colors.BORDER_COLOR, borderWidth: 1, borderRadius: 4, width: 280, paddingLeft: 10, fontSize: 16}}
                onChangeText={name => setFirstName(name)}
                value={firstName}
              />
            </View>
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: colors.BORDER_COLOR,
                borderBottomWidth: 1,
                paddingHorizontal: 20,
                height: 60
              }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingRight: 10
                }}>Last Name</Text>
              <TextInput
                style={{ height: 40, borderColor: colors.BORDER_COLOR, borderWidth: 1, borderRadius: 4, width: 280, paddingLeft: 10, fontSize: 16}}
                onChangeText={lastName => setLastName(lastName)}
                value={lastName}
              />
            </View>
            <TextBorder text={'Sub Information'} />
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: colors.BORDER_COLOR,
                borderBottomWidth: 1,
                paddingHorizontal: 20,
                height: 60
            }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingRight: 10
                }}>Email</Text>
              <TextInput
                style={{ height: 40, borderColor: colors.BORDER_COLOR, borderWidth: 1, borderRadius: 4, width: 280, paddingLeft: 10, fontSize: 16}}
                onChangeText={email => setEmail(email)}
                value={email}
              />
            </View>
            <View 
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomColor: colors.BORDER_COLOR,
                borderBottomWidth: 1,
                paddingHorizontal: 20,
                height: 60
            }}>
              <Text
                style={{
                  fontSize: 16,
                  paddingRight: 10
                }}>Phone</Text>
              <TextInput
                style={{ height: 40, borderColor: colors.BORDER_COLOR, borderWidth: 1, borderRadius: 4, width: 280, paddingLeft: 10, fontSize: 16}}
                onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                value={phoneNumber}
              />
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.BACKGROUND_COLOR,
  },
  contentContainer: {
    flexGrow: 1,
  }
});

export default IndividualContactScreen;
