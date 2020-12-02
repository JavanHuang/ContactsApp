import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsListScreen from './screens/ContactsListScreen';
import IndividualContactsScreen from './screens/IndividualContactScreen';

const Stack = createStackNavigator();

// const screenOptions = ({navigation}) => ({
//   headerLeft: (props) => (
//       <TouchableOpacity
//         onPress={() => {
//           navigation.goBack();
//         }}
//         style={{
//           marginTop: -5,
//           paddingBottom: 5,
//           paddingLeft: 22.5,
//           paddingRight: 22
//         }}>
//           <Text>Hello</Text>
//       </TouchableOpacity>
//     ),
//   gestureEnabled: true
// });

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ContactsList">
        <Stack.Screen 
          name="ContactsList"
          component={ContactsListScreen}
          options={({navigation}) => ({
            title: 'Contacts',
            headerRight: () => (
              <Button onPress={() => navigation.navigate('IndividualContacts')} title="Right" />
            ),
            headerLeft: () => (
              <Button onPress={() => navigation.navigate('IndividualContacts')} title="Left" />
            ),
          })
          } />
        <Stack.Screen name="IndividualContacts" component={IndividualContactsScreen} options={{title: ''}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
