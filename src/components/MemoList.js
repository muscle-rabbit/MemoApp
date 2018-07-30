import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight,
} from 'react-native';

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
    console.log(this.props.memoList);
    return (
      <View style={styles.memoList}>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>Hello</Text>
            <Text style={styles.memoListDate}>2018/7/26</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>Hello</Text>
            <Text style={styles.memoListDate}>2018/7/26</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail'); }}>
          <View style={styles.memoListItem}>
            <Text style={styles.memoListTitle}>Hello</Text>
            <Text style={styles.memoListDate}>2018/7/26</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default MemoList;
