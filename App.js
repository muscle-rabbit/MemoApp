import firebase from 'firebase';
import { createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SingupScreen from './src/screens/SignupScreen';
import ENV from './env.json';
import MemoCreateScreen from './src/screens/MemoCreateScreen';

// eslint-disable-next-line
require("firebase/firestore");

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
  Signup:     { screen: SingupScreen },
  Home:       { screen: MemoListScreen },
  MemoDetail: { screen: MemoDetailScreen },
  MemoEdit:   { screen: MemoEditScreen },
  MemoCreate: { screen: MemoCreateScreen },
}, {
  navigationOptions: {
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerTitle: 'MEMOT',
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#6f6669',
      ...Platform.select({
        android: {
          height: 80,
        },
      }),
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default App;
