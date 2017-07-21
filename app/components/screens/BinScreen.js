import React, { Component } from 'react';
import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 12,
    fontSize: 16,
  },
  icon: {
    height: 80,
    width: 50
  },
  worm_bin: {
    height: 80,
    width: 70
  },
});

export default class BinScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Bin Guide`,
  });

  render() {

    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 0.4, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={styles.container}>
             <Image source={require('./images/compost_bin.png')} style={styles.icon} />
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
             <Image source={require('./images/worm_bin.png')} style={styles.worm_bin} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
             <Image source={require('./images/organic.png')} style={styles.icon} />
          </View>
          <View style={styles.container}>
             <Image source={require('./images/recycle_bin.png')} style={styles.icon} />
          </View>
          <View style={styles.container}>
             <Image source={require('./images/landfill.png')} style={styles.icon} />
          </View>
        </View>
      </View>
    );
  }
}
