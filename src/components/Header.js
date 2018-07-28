import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
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
});

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>MEMOT</Text>
      </View>
    );
  }
}

export default Header;
