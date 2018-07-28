import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  circleBottun: {
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
  circleButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },
});

class CircleButton extends React.Component {
  render() {
    return (
      <View style={styles.circleBottun}>
        <Text style={styles.circleButtonTitle}>
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default CircleButton;
