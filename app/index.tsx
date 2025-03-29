import About from '@/pages/About';
import { HomeScreen } from '@/pages/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Welcome' }}/>
      <Stack.Screen name="About" component={About} options={{title: "About"}} />
    </Stack.Navigator>
  );
}