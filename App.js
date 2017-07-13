import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './app/components/screens/HomeScreen'

const  SimpleAppNavigator = StackNavigator({
  Home: { screen: HomeScreen }
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
