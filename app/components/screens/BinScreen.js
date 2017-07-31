import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import InnerPane from './InnerPane';

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

  constructor(props) {
    super(props);
    this.state = {
      screen_id : 'worm'
    };
  }

  onPress(sid) {
    this.setState({
      screen_id: sid,
    });
  }

  render() {
    var compost = <InnerPane bin_type='compost'/>
    var worm = <InnerPane bin_type='worm'/>
    var green = <InnerPane bin_type='organic'/>
    var yellow = <InnerPane bin_type='recycle'/>
    var red = <InnerPane bin_type='landfill'/>
    var panes = {'compost': compost, 'worm': null, 'organic': green, 'recycle': yellow, 'landfill': red};

    return (
      // if worm, display worm View, etc etc
      <View style={{flex: 1}}>
        {panes[this.state.screen_id]}
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <Text>{this.state.screen_id}</Text>
        </View>
        <View style={{flex: 0.4, flexDirection: 'row', backgroundColor: 'white'}}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => { this.onPress('compost') } }>
              <Image source={require('./images/compost_bin.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => { this.onPress('worm') } }>
              <Image source={require('./images/worm_bin.png')} style={styles.worm_bin} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => { this.onPress('organic') } }>
             <Image source={require('./images/organic.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => { this.onPress('recycle') } }>
             <Image source={require('./images/recycle_bin.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => { this.onPress('landfill') } }>
             <Image source={require('./images/landfill.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
