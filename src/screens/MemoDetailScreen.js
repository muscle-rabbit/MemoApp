import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CircleButton from '../elements/CircleButton';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  memoDetailHeader: {
    backgroundColor: '#A7A096',
    height: 100,
    justifyContent: 'center',
    padding: 15,
  },
  memoDetailHeaderTitle: {
    color: 'white',
    fontSize: 25,
  },
  memoDetailHeaderDate: {
    color: 'white',
  },
  memoDetailContent: {
    paddingLeft: 15,
    paddingTop: 35,
    fontSize: 15,
  },
  editButton: {
    top: 75,
  },
});

class MemoDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.memoDetailHeader}>
            <Text style={styles.memoDetailHeaderTitle}>講座のアイデア</Text>
            <Text style={styles.memoDetailHeaderDate}>2018/7/26</Text>
          </View>
        </View>
        <View>
          <Text style={styles.memoDetailContent}>講座のアイデア</Text>
        </View>

        <CircleButton color="white" style={styles.editButton} onPress={() => { this.props.navigation.navigate('MemoEdit'); }}>
          {'\uf044'}
        </CircleButton>
      </View>
    );
  }
}

export default MemoDetailScreen;
