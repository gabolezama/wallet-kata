import Home from './Screens/Home';
import Amount from './Screens/Amount';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { store } from './Store/Store';
import { Provider } from 'react-redux'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='amount'>
          <Stack.Screen name="amount" component={Amount}/>
          <Stack.Screen name="home" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
