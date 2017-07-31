import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

export default class InnerPane extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: props.bin_type
    };
  }

  constructPaneContent(){
    let prop_content = this.state.content;
    Alert.alert(
      'Props',
      prop_content
    );
    let resContent = <View style={{flex: 1, backgroundColor: 'white'}}><Text>DEFAULT</Text></View>
    switch(prop_content) {
      case 'worm':
        resContent = <View style={{flex: 1, backgroundColor: 'pink'}}><Text>WORM</Text></View>
        break;
      case 'organic':
        resContent = <View style={{flex: 1, backgroundColor: 'green'}}><Text>GREEN</Text></View>
        break;
      case 'compost':
        resContent = <View style={{flex: 1, backgroundColor: 'grey'}}><Text>COMPOST</Text></View>
        break;
      case 'landfill':
        resContent = <View style={{flex: 1, backgroundColor: 'red'}}><Text>RED</Text></View>
        break;
      case 'recycle':
        resContent = <View style={{flex: 1, backgroundColor: 'yellow'}}><Text>RECYCLE</Text></View>
        break;
      default:
        resContent = <View style={{flex: 1, backgroundColor: 'beige'}}><Text>{prop_content}</Text></View>
    }
    return resContent;
  }

  render() {
    let element = this.constructPaneContent();
    return(
      <View style={{flex: 1 }}>
        {element}
      </View>
    );
  }
}
