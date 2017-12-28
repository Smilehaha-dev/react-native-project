/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Button
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
   this.props.navigation.navigate('Second');

}
  render() {
    let pic = {
     uri: 'https://i-cdn.phonearena.com/images/articles/265518-thumb/iphone-h1.jpg'
   };
    return (
      <View style={styles.container}>
      <View style={{marginBottom: 20}}>
        <Button onPress = { this.FunctionToOpenSecondActivity } title = 'Click Here To Open Second Activity'/>
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

 Second: { screen: SecondActivity }
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
