import React from 'react';
import { StyleSheet, View } from 'react-native';
import MemoListScreen from './src/screens/MemoListScreen';
import Header from './src/components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MemoListScreen />
      </View>
    );
  }
}
