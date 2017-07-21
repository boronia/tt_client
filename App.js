import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/components/screens/HomeScreen'
import ScanScreen from './app/components/screens/ScanScreen'
import PlasticScreen from './app/components/screens/PlasticScreen'
import BinScreen from './app/components/screens/BinScreen'

const  SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Scan: { screen: ScanScreen },
  Plastics: { screen: PlasticScreen },
  Bin: { screen: BinScreen }
});

const AppNavigation = () => (
  <SimpleAppNavigator  />
);

export default class App extends Component {
  render() {
    return (
        <AppNavigation/>
    );
  }
}
