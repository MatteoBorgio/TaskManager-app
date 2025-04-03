import {About} from '../pages/About';
import { HomeScreen } from '../pages/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={({ navigation }) => ({
          title: 'Task Manager app',
          headerTitle: () => (
            <View style={styles.headerTitleContainer}>
              <Ionicons name="bookmarks" size={24} color="black" />
              <Text style={styles.headerTitleText}>Task Manager app</Text>
            </View>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Ionicons name="information-circle-outline" size={24} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="About" component={About} options={{ title: "About" }} />
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
