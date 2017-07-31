import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ListView, TouchableOpacity, TextInput, Alert } from 'react-native';

const data = [
  {
    "name": "Bedroom",
    "icon": require('./images/shirt.png')
  },
  {
    "name": "Bathroom",
    "icon": require('./images/bathroom.png')
  },
  {
    "name": "Building",
    "icon": require('./images/building.png')
  },
  {
    "name": "Garage",
    "icon": require('./images/garage.png')
  },
  {
    "name": "Garden",
    "icon": require('./images/garden.png')
  },
  {
    "name": "Kitchen",
    "icon": require('./images/kitchen.jpg')
  },
  {
    "name": "Laundry",
    "icon": require('./images/laundry.png')
  },
  {
    "name": "Living",
    "icon": require('./images/living.jpg')
  },
  {
    "name": "Study",
    "icon": require('./images/study.png')
  }
]

const styles_header = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#C1C1C1',
  },
  input: {
    height: 30,
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 2,
  },
});

const styles_footer = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderColor: '#8E8E8E',
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  text: {
    color: '#8E8E8E',
  },
});

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
    height: 40,
    width: 40
  },
});

const Row = (props) => (
  <View style={styles_row.container}>
    <Image source={props.icon} style={styles_row.photo} />
    <Text style={styles_row.text}>
      {`${props.name}`}
    </Text>
  </View>
);

const Footer = () => (
  <View style={styles_footer.container}>
    <TouchableOpacity style={styles_footer.button} onPress={() => Alert.alert('No more!')}>
      <Text style={styles_footer.text}>Load More</Text>
    </TouchableOpacity>
  </View>
);

const Header = () => (
  <View style={styles_header.container}>
    <TextInput
      style={styles_header.input}
      placeholder="Search..."
      onChangeText={(text) => console.log('searching for ', text)}
    />
  </View>
);

export default class SearchScreen extends Component {
  // Nav options can be defined as a function of the screen's props:
  static navigationOptions = ({ navigation }) => ({
    title: `Bin Guide`,
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
        renderHeader={() => <Header />}
      />
    );
  }
}
