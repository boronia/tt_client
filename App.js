import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/components/screens/HomeScreen'
import ScanScreen from './app/components/screens/ScanScreen'

const  SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Scan: { screen: ScanScreen }
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
