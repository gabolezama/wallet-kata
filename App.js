import Home from './Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { store } from './Store/Store';
import { Provider } from 'react-redux'; 
import Report from './Screens/Report';
import Operation from './Screens/Operation';
import CurrencySelector from './Components/CurrencySelector';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='home'>
          <Stack.Screen options={{title:'Wallet Kata'}} name="home" component={Home}/>
          <Stack.Screen options={{title:'Operaciones'}} name="amount" component={Operation}/>
          <Stack.Screen options={{title:'Reporte de Transacciones'}} name="report" component={Report}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
