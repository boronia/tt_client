import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'beige'
  },
  text: {
    flex:1,
    marginLeft: 12,
    fontSize: 16,
  },
  icon1: {
    flex:0,
    height:150,
    width: 170
  },
  icon2: {
    flex:0,
    height:130,
    width: 414
  },
});

export default class ScanResultScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Result`,
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          <Image source={require('./images/star_thumbs.png')} style={styles.icon1}/>
        </View>
        <View style={{flex:0.8}}>

          <Text style={styles.text}>Glass is 100% recyclable. It can be recycled and reprocessed indefinitely.
            Recycling glass saves 75% of the energy to make glass from scratch</Text>
        </View>
        <View style={{flex:1}}>
          <Image source={require('./images/star_ideas.png')} style={styles.icon2}/>
        </View>
        <View style={{flex:1.2}}>
          <Text style={styles.text}>Drinking glasses, window panes and oven-proof glasses
          have different melting temperature to glass bottles and cannot be recycled.
          So take care with these treasures!
          </Text>
        </View>
      </View>
    );
  }
}
