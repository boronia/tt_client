import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/components/screens/HomeScreen'
import ScanScreen from './app/components/screens/ScanScreen'
import PlasticScreen from './app/components/screens/PlasticScreen'

const  SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Scan: { screen: ScanScreen },
  Plastics: { screen: PlasticScreen }
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
