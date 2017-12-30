/**
 * Trying out Stuff
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Parse from './ParseJson';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ToastAndroid,
  ActivityIndicator,
  ListView
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class App extends Component<{}> {
  static navigationOptions =
 {
    title: 'MainActivity',
 };
 FunctionToOpenSecondActivity = () =>
{
  ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
   this.props.navigation.navigate('Second');

}

FunctionToOpenThirdActivity = () =>
{
  ToastAndroid.show('Parsing demo Json', ToastAndroid.SHORT);
  this.props.navigation.navigate('Third');

}
FunctionToOpenFourthActivity = ()=>{
  ToastAndroid.show('Testing', ToastAndroid.SHORT);
  this.props.navigation.navigate('Fourth');
}
  render() {
    let pic = {
     uri: 'https://i-cdn.phonearena.com/images/articles/265518-thumb/iphone-h1.jpg'
   };
    return (
      <View style={styles.container}>
      <View style={{marginBottom: 20}}>
      <Text style={styles.TextStyle} >Hello This is Me :) </Text>
      </View>
      <View style={{marginBottom: 20}}>
        <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Second Activity'/>
      </View>

      <View style={{marginBottom: 20}}>
        <Button onPress = { this.FunctionToOpenThirdActivity } title = 'Click Here To Parse Json'/>
      </View>
      <View style={{marginBottom: 20}}>
        <Button onPress = { this.FunctionToOpenFourthActivity } title = 'Click Here To Test Packaging'/>
      </View>

        <Image source={pic} style={{height:200, width:200}}/>
      </View>
    );
  }
}

class SecondActivity extends Component<{}>
{
 static navigationOptions =
 {
    title: 'SecondActivity',
 };

 render()
 {
    return(
       <View style = { styles.MainContainer }>

          <Text style = { styles.TextStyle }> This is SecondActivity </Text>

       </View>
    );
 }
}



export default Project = StackNavigator(
{
 First: { screen: App },

 Second: { screen: SecondActivity },

 Third: {screen: Parse},

 Fourth: {screen: Login}
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  TextStyle:{
    fontSize: 25,
    textAlign: 'left',
    color: '#212121'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
