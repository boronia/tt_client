import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ListView, TouchableOpacity, TextInput } from 'react-native';
import Row from './Row'

const data = [
  {
    "name": "PET",
    "bin_type": "yellow",
    "plastic_type": require('./images/pet1.png'),
    "description": "Soft drink and juice bottles"
  },
  {
    "name": "HDPE",
    "bin_type": "yellow",
    "plastic_type": require('./images/pehd.png'),
    "description": "Milk bottles, washing up"
  },
  {
    "name": "PVC",
    "bin_type": "green_loc",
    "plastic_type": require('./images/pvc.png'),
    "description": "Squeeze bottles, cling film"
  },
  {
    "name": "LDPE",
    "bin_type": "green_loc",
    "plastic_type": require('./images/ldpe.png'),
    "description": "Carrier bags, bin liners"
  },
  {
    "name": "PP",
    "bin_type": "yellow",
    "plastic_type": require('./images/pp.png'),
    "description": "Butter tubs, ice cream"
  },
  {
    "name": "PS",
    "bin_type": "red",
    "plastic_type": require('./images/ps.png'),
    "description": "Plastic cutlery, foam cups"
  },
  {
    "name": "OTHER",
    "bin_type": "green_loc",
    "plastic_type": require('./images/other.jpg'),
    "description": "Acrylic, nylon"
  },
]

const styles_listview = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});

export default class PlasticScreen extends Component {

  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Plastics Guide`,
  });

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  render() {
    return (
      <ListView
        style={styles_listview.container}
        dataSource={this.state.dataSource}
        renderRow={
          (data) => <Row {...data} />
        }
        renderSeparator={
          (sectionId, rowId) => <View key={rowId} style={styles_listview.separator} />
        }
      />
    );
  }
}
