import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  header: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: 78,
    backgroundColor: '#6f6669',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    shadowColor: '#1f1518',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 18,
    color: '#f7d008',
  },
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
  memoAddBottun: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#ffc0cb',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#1f1518',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.6,
  },
  memoAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>MEMOT</Text>
        </View>
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
        <View style={styles.memoAddBottun}>
          <Text style={styles.memoAddButtonTitle}>+</Text>
        </View>
      </View>
    );
  }
}
