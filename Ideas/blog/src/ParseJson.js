import React, {Component} from 'react';
import {
  ListView,
  Text,
  ActivityIndicator,
  View
} from 'react-native';

export default class Parse extends Component<{}>{


static navigationOptions=
{
  title: 'Parsing',
};

constructor(props) {
  super(props);
  this.state = {
    isLoading: true
  }
}

componentDidMount() {
  return fetch('http://192.168.1.100:8080/users')
    .then((response) => response.json())
    .then((responseJson) => {
      let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.setState({
        isLoading: false,
        dataSource: ds.cloneWithRows(responseJson.message),
      }, function() {
        // do something with new state
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

render() {
  if (this.state.isLoading) {
    return (
      <View style={{flex: 1, paddingTop: 20}}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={{flex: 1, paddingTop: 20}}>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData.userEmail}, {rowData.userPassword}</Text>}
      />
    </View>
  );
}

}
