import * as React from 'react';
import {
  StyleSheet, View, TextInput, TouchableHighlight, Text,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    alignSelf: 'center',
    marginBottom: 24,
  },
  Input: {
    backgroundColor: '#eee',
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#DDD',
    padding: 8,
  },
  button: {
    backgroundColor: '#ffc0cb',
    height: 48,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '55%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

class LoginScreen extends React.Component {
  state = {
    email: '',
    password: '',
  }

  // eslint-disable-next-line
  handleSubmit() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.Input}
          value={this.state.email}
          onChangeText={(text) => { this.setState({ email: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Email Address"
        />
        <TextInput
          style={styles.Input}
          value={this.state.password}
          onChangeText={(text) => { this.setState({ password: text }); }}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="password"
          secureTextEntry
        />
        <TouchableHighlight style={styles.button} title="submit" onPress={this.handleSubmit}>
          <Text style={styles.buttonTitle}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default LoginScreen;
