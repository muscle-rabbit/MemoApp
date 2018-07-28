import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MemoList from '../components/MemoList';
import CircleButton from '../elements/CircleButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

class MemoListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MemoList />
        <CircleButton>
          <Text>+</Text>
        </CircleButton>
      </View>
    );
  }
}

export default MemoListScreen;
