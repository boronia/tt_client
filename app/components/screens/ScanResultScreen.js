import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'rgba(204, 204, 102, 0.109803921568627)'
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
  icon3: {
    flex:0,
    height:120,
    width: 120
  },
});

const Strong = (props) => <Text style={{fontWeight: 'bold', fontSize: 18}}>{props.children}</Text>

export default class ScanResultScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Result`,
  });

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1, backgroundColor: 'white', width: 414, alignItems: 'center'}}>
          <Image source={require('./images/star_thumbs.png')} style={styles.icon1}/>
        </View>
        <View style={{flex:0.8, width: 414,backgroundColor: 'white'}}>

          <Text style={styles.text}><Strong>Glass</Strong> is 100% recyclable. It can be recycled and reprocessed indefinitely.
            Recycling glass saves 75% of the energy to make glass from scratch</Text>
        </View>
        <View style={{flex:1}}>
          <Image source={require('./images/star_ideas.png')} style={styles.icon2}/>
        </View>
        <View style={{flex:1.2}}>
          <Text style={styles.text}><Strong>Be Careful!  </Strong>Drinking glasses, window panes and oven-proof glasses
          have different melting temperature to glass bottles and cannot be recycled.
          So take care with these treasures!
          </Text>
        </View>
      </View>
    );
  }
}
