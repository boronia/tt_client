import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const styles_row = StyleSheet.create({
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
  photo: {
    height: 48,
    width: 31
  },
});

export default class Row extends Component {

  constructor(props) {
    super(props);
    var bin_type = props.bin_type;
    var icon_req = null;
    if (bin_type == 'yellow') {
      icon_req = require('./images/yellow_bin.png')
    }
    else if (bin_type == 'green_loc'){
      icon_req = require('./images/green_loc.png')
    }
    else if (bin_type == 'red') {
      icon_req = require('./images/red_bin.png')
    }
    this.state = {
      description: props.description,
      icon: icon_req
    };
  }

  render() {
    return (
      <View style={styles_row.container}>
        <Image source={this.state.icon} style={styles_row.photo} />
        <Text style={styles_row.text}>
          {`${this.state.description}...`}
        </Text>
      </View>
    );
  }
}
