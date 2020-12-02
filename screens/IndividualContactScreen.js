import React, {useState, useEffect, useRef} from 'react'
import { View, ScrollView, Text, TextInput, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import colors from '../assets/colors/colors';

import {ContactIcon} from '../components/ContactIcon';
import {TextBorder} from '../components/TextBorder';

function IndividualContactScreen({route}) {
  const navigation = useNavigation();

  const {contact} = route.params;
  const [firstName, setFirstName] = useState(contact.firstName);
  const [lastName, setLastName] = useState(contact.lastName);
  const [email, setEmail] = useState(contact.email);
  const [phoneNumber, setPhoneNumber] = useState(contact.phone);

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const emailInputRef = useRef();
  const phoneNumberInputRef = useRef();

  const checkTextInput = () => {
    if (!firstName.trim()) {
      alert('First Name is required. Please enter your first name.');
      return;
    }
    if (!lastName.trim()) {
      alert('Last Name is required. Please enter your last name.');
      return;
    }

    navigation.navigate('ContactsList', {changedContact: {
      id: contact.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phoneNumber
    }})
  };
  
  const renderSaveButton = () => {
    return (
      <View
        style={{
          paddingRight: 10
        }}>
        <Button onPress={() => checkTextInput()} title="Save" color={colors.THEME_COLOR} />
      </View>
    )
  };

  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: renderSaveButton
    });
  }, [firstName, lastName, email, phoneNumber]);

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
                onChangeText={value => setFirstName(value)}
                defaultValue={contact.firstName}
                keyboardType={'default'}
                returnKeyType="next"
                onSubmitEditing={() => lastNameInputRef.current.focus()}
                blurOnSubmit={false}
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
                ref={lastNameInputRef}
                onChangeText={value => setLastName(value)}
                defaultValue={contact.lastName}
                keyboardType={'default'} 
                returnKeyType="next"
                onSubmitEditing={() => emailInputRef.current.focus()}
                blurOnSubmit={false}
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
                ref={emailInputRef}
                onChangeText={value => setEmail(value)}
                value={email}
                keyboardType={'email-address'}
                returnKeyType="next"
                onSubmitEditing={() => phoneNumberInputRef.current.focus()}
                blurOnSubmit={false}
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
                ref={phoneNumberInputRef}
                onChangeText={value => setPhoneNumber(value)}
                value={phoneNumber}
                keyboardType={'default'}
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
