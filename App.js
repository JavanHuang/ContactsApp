import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsListScreen from './screens/ContactsListScreen';
import IndividualContactScreen from './screens/IndividualContactScreen';

import colors from './assets/colors/colors';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactsList">
        <Stack.Screen 
          name="ContactsList"
          component={ContactsListScreen}
          options={({navigation}) => ({
            title: 'Contacts',
            // headerLeft: () => ( // TO-DO: Implement icons for Search
            //   <Button onPress={() => navigation.navigate('IndividualContacts')} title="Search" color={colors.THEME_COLOR} />
            // ),
            // headerRight: () => ( // TO-DO: Implement icons for Add
            //   <Button onPress={() => navigation.navigate('IndividualContacts')} title="Add" color={colors.THEME_COLOR} />
            // ),
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
