import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';

import {
  StyleSheet,
  Button,
  View,
  ToastAndroid
} from 'react-native';

export default class Login extends Component<{}> {

  static navigationOptions =
  {
     title: 'Packaging'
  };

  FunctionToToast(){
    ToastAndroid.show('Hello You Are Logged In',ToastAndroid.SHORT);
  }

  render(){
    return(
    <View style={styles.container}>
    <Button onPress={this.FunctionToToast} title='Click To Toast'/>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
  });
