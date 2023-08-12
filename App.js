import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowsScreen from './src/screens/ResultsShowsScreen';

const Stack = createStackNavigator();

const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Search" component={SearchScreen} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={ResultsShowsScreen} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
