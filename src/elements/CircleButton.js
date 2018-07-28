import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { Font } from 'expo';
import fontAwesome from '../../assets/fonts/fa-regular-400.ttf';

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
    fontFamily: 'FontAwesome',
    fontSize: 25,
    lineHeight: 32,
    color: '#fff',
  },
});

class CircleButton extends React.Component {
  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      FontAwesome: fontAwesome,
    });
    this.setState({ fontLoaded: true });
  }


  render() {
    const { style, color } = this.props;

    let bgColor = '#ffc0cb';
    let textColor = '#fff';

    if (color === 'white') {
      bgColor = '#fff';
      textColor = '#ffc0cb';
    }
    return (
      <View style={[styles.circleBottun, style, { backgroundColor: bgColor }]}>
        {
          this.state.fontLoaded ? (
            <Text style={[styles.circleButtonTitle, { color: textColor }]}>
              {this.props.children}
            </Text>
          ) : null
        }
      </View>
    );
  }
}

export default CircleButton;
