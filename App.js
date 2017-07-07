/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  constructor(props){
    super(props);
    this.state = {lastLeftPress: 0};
  }

  static navigationOptions = {
    drawerLabel: 'Home',
  };

  _handleLeftClick = () => {
    const delta = new Date().getTime() - this.state.lastPress;
    if(delta > 500 || this.state.lastLeftPress === 0) {
      this.props.navigation.navigate('DrawerOpen')
    }

    this.setState({
      lastPress: new Date().getTime()
    })
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F5FCFF', paddingHorizontal: 10 }}>
        <View style={{ height: 60, width: 120, marginTop: 10 }}>
          <Button
            title="Open Drawer"
            onPress={this._handleLeftClick}
          />
        </View>
        <Text>Home</Text>
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#aae3ed', paddingHorizontal: 10 }}>
        <View style={{ height: 60, width: 120, marginTop: 10 }}>
          <Button
            title="Open Drawer"
            onPress={() => this.props.navigation.navigate('DrawerOpen')}
          />
        </View>
        <Text>Notifications</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: '#F5FCFF',
  }
});

const MyApp = DrawerNavigator({
  Home: {
    screen: HomeScreen,
  },
  Notifications: {
    screen: MyNotificationsScreen,
  },
});

AppRegistry.registerComponent('drawerIssue', () => MyApp);
