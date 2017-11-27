import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Main from "./components/Main";
import {Provider} from "react-redux";
import store from "./store";


export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2d89e5',
    padding: 10,
    margin: 20,
    borderRadius: 30
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    color: '#fff',
  },
  container: {
    backgroundColor: '#F5FCFF',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2d89e5',
    color: '#fff',
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30
  },
  input: {
    fontSize: 15,
    backgroundColor: '#2d89e5',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  }
});
