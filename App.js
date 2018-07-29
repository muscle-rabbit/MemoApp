import firebase from 'firebase';
import { createStackNavigator } from 'react-navigation';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SingupScreen from './src/screens/SignupScreen';
import ENV from './env.json';

const config = {
  apiKey:              ENV.FIREBASE_API_KEY,
  authDomain:          ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:         ENV.FIREBASE_DB_URL,
  projectId:           ENV.FIREBASE_PRJ_ID,
  storageBucket:       ENV.FIREBASE_STORAGE,
  messagingSenderId:   ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);

const App = createStackNavigator({
  Login:      { screen: LoginScreen },
  Singup:     { screen: SingupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
}, {
  navigationOptions: {
    headerTintColor: '#fff',
    headerBackTitle: null,
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
