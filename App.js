import * as React from 'react';
import { View, TouchableOpacity, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsListScreen from './screens/ContactsListScreen';
import IndividualContactScreen from './screens/IndividualContactScreen';

import colors from './assets/colors/colors';

const Stack = createStackNavigator();

function App() {
  const addNewContact = (navigation) => {
    console.log('Add new contact');
    navigation.navigate('IndividualContact', {contact: {}, action: 'add'});
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactsList">
        <Stack.Screen 
          name="ContactsList"
          component={ContactsListScreen}
          options={({navigation}) => ({
            title: 'Contacts',
            headerLeft: () => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  paddingLeft: 20
                }}
                onPress={() => console.log('Search for contact')}
              >
                <MaterialCommunityIcons name="magnify" size={30} color={colors.THEME_COLOR}/>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  paddingRight: 20
                }}
                onPress={() => addNewContact(navigation)}>
                <MaterialCommunityIcons name="plus" size={30} color={colors.THEME_COLOR}/>
              </TouchableOpacity>
            ),
          })
          } />
        <Stack.Screen
          name="IndividualContact"
          component={IndividualContactScreen}
          options={({navigation}) => ({
            title: '',
            headerLeft: () => (
              <View
                style={{
                  paddingLeft: 10
                }}>
                <Button onPress={() => navigation.navigate('ContactsList')} title="Cancel" color={colors.THEME_COLOR} />
              </View>
            )
          })
         } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
