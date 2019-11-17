/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import {Text, SafeAreaView} from 'react-native';
import {Button, View} from 'native-base';
import React, {Component} from 'react';

export default class posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  pressMe() {
    alert('hi');
  }

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>Welcome to this Boilerplate v1.0.1</Text>
          <Button onPress={this.pressMe}>Click Me to see more</Button>
        </View>
      </SafeAreaView>
    );
  }
}
