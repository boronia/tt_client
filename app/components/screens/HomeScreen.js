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

        <View style={{flex: 1, flexDirection: 'row'}}>
           <View style={small_pane_styles.container}>
              <Image
                source={require('./images/search.png')}
                style={{ height: 100, width: 100}}
              />
              <Text> SEARCH </Text>
           </View>
           <View style={small_pane_styles.container}>
              <Image
                source={require('./images/scan.png')}
                style={{ height: 100, width: 100}}
              />
              <Text> SCAN </Text>
           </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
           <View style={small_pane_styles.container}>
              <Image
                source={require('./images/plastics.png')}
                style={{ height: 100, width: 100}}
              />
              <Text>PLASTICS</Text>
           </View>
           <View style={small_pane_styles.container}>
              <Image
                source={require('./images/bin_guide.png')}
                style={{ height: 100, width: 100}}
              />
              <Text> BIN GUIDE </Text>
           </View>
        </View>
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

const small_pane_styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'beige'
  },
});
