import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  memoList: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
  },
  memoListItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#232020a8',
  },
  memoListTitle: {
    fontSize: 18,
  },
  memoListDate: {
    color: '#1515154a',
  },
});

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>Hello</Text>
          <Text style={styles.memoListDate}>2018/7/26</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>Hello</Text>
          <Text style={styles.memoListDate}>2018/7/26</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>Hello</Text>
          <Text style={styles.memoListDate}>2018/7/26</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>Hello</Text>
          <Text style={styles.memoListDate}>2018/7/26</Text>
        </View>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>Hello</Text>
          <Text style={styles.memoListDate}>2018/7/26</Text>
        </View>
      </View>
    );
  }
}

export default MemoList;
