import React from 'react';
import {
  StyleSheet, View, Text, TouchableHighlight, FlatList,
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

const dateString = (date) => {
  if (date === null) { return ''; }
  const str = date.toISOString();
  return str.split('T')[0];
};

class MemoList extends React.Component {
  renderMemo({ item }) {
    console.log(item);
    return (
      <TouchableHighlight onPress={() => { this.props.navigation.navigate('MemoDetail', { memo: item }); }}>
        <View style={styles.memoListItem}>
          <Text style={styles.memoListTitle}>{item.body.substring(0, 10)}</Text>
          <Text style={styles.memoListDate}>{dateString(item.createdOn)}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <View style={styles.memoList}>
        <FlatList data={this.props.memoList} renderItem={this.renderMemo.bind(this)} />
      </View>
    );
  }
}

export default MemoList;
