/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { DrawerNavigator } from 'react-navigation';

export default class HomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
  };
  state = {
          lastPress: 0,
  };

  DOUBLE_TAP_DURATION = 300;

  _handleClick = (action, resetAction) => {
      const currentTime = parseInt(new Date().getTime());
      let duration = currentTime - parseInt(this.state.lastPress);
      console.log(duration);
      this.setState({lastPress: currentTime});
      if (parseInt(duration) <= this.DOUBLE_TAP_DURATION) {
          //Handle Double Tap
          console.log("Double");
          return this.props.navigation.navigate('DrawerClose');
      } else {
          //Handle Single Tap
          console.log("Single");
          return this.props.navigation.navigate('DrawerOpen');
      }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'red', paddingHorizontal: 10 }}>
        <View style={{ height: 60, width: 120, marginTop: 10 }}>
          <Button
            title="Open Drawer"
            onPress={() => this._handleClick()}
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
  state = {
          lastPress: 0,

  };

  DOUBLE_TAP_DURATION = 300;

  _handleClick = (action, resetAction) => {
      const currentTime = parseInt(new Date().getTime());
      let duration = currentTime - parseInt(this.state.lastPress);
      console.log(duration);
      this.setState({lastPress: currentTime});
      if (parseInt(duration) <= this.DOUBLE_TAP_DURATION) {
          //Handle Double Tap
          console.log("Double");
          return this.props.navigation.navigate('DrawerClose');
      } else {
          //Handle Single Tap
          console.log("Single");
          return this.props.navigation.navigate('DrawerOpen');
      }
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'orange', paddingHorizontal: 10 }}>
        <View style={{ height: 60, width: 120, marginTop: 10 }}>
          <Button
            title="Open Drawer"
            onPress={() => this._handleClick()}
          />
        </View>
        <Text>Notifications</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
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
