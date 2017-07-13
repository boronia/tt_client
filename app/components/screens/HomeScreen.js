import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';

import { Constants } from 'expo';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Trash or Treasure',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <View style={full_pane_styles.container}>
          <Image
            style={{ height: 150, width: 160}}
            source={require('./images/star.png')}
          />
          <Text></Text>
          <Text> Search. Scan. Browse. </Text>
          <Text> Check which bin to put it in. </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 1, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

const full_pane_styles = StyleSheet.create({
  container: {
    flex: 1.3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});
