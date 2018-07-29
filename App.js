import { createStackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SingupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  Login:      { screen: LoginScreen },
  Singup:     { screen: SingupScreen },
}, {
  navigationOptions: {
    headerTitle: 'MEMOT',
    headerStyle: {
      backgroundColor: '#6f6669',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
