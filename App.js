import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import MemoDetailScreen from './src/screens/MemoDetailScreen';

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
        <MemoDetailScreen />
      </View>
    );
  }
}
