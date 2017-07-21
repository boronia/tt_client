import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity
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
             <TouchableOpacity onPress={() => navigate('Scan')}>
                <Image
                  source={require('./images/search.png')}
                  style={{ height: 100, width: 100}}
                />
             </TouchableOpacity>
              <Text> SEARCH </Text>
           </View>
           <View style={small_pane_styles.container}>
             <TouchableOpacity onPress={() => navigate('Scan')}>
                <Image
                  source={require('./images/scan.png')}
                  style={{ height: 100, width: 100}}
                />
             </TouchableOpacity>
              <Text> SCAN </Text>
           </View>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
           <View style={small_pane_styles.container}>
             <TouchableOpacity onPress={() => navigate('Plastics')}>
                <Image
                  source={require('./images/plastics.png')}
                  style={{ height: 100, width: 100}}
                />
             </TouchableOpacity>
              <Text>PLASTICS</Text>
           </View>
           <View style={small_pane_styles.container}>
           <TouchableOpacity onPress={() => navigate('Bin')}>
              <Image
                source={require('./images/bin_guide.png')}
                style={{ height: 100, width: 100}}
              />
           </TouchableOpacity>
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
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(204, 204, 102, 0.109803921568627)'
  },
});
