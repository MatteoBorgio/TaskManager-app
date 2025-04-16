import {About} from '../pages/About';
import { HomeScreen } from '../pages/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Settings } from '../pages/Settings';
const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          title: 'Task Manager app',
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
          headerTintColor: '#ffffff', 
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Ionicons name="settings-outline" size={24} color="#ffffff" />
              </TouchableOpacity>
              <Text style={styles.headerTitleText}>Task Manager App</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Ionicons name="information-circle-outline" size={24} color="#ffffff" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen 
        name="About" 
        component={About} 
        options={{
          title: "About",
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
          headerTintColor: '#ffffff', 
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }} 
      />
      <Stack.Screen 
        name="Settings" 
        component={Settings} 
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor: '#4a90e2',
          },
          headerTintColor: '#ffffff', 
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitleContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginLeft: 10, 
  },
  headerTitleText: {
    marginLeft: 10, 
    fontSize: 18, 
    fontWeight: 'bold',
  },
});
