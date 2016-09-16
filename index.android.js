// <reference path="./.vscode/typings/react/react.d.ts" />
// <reference path="./.vscode/typings/react-native/react-native.d.ts" />
/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
  View
} from 'react-native';
import App from './src2/App';

class Volunteering extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="rgb(24, 24, 32)"/>
        <App style={{flex: 1}}/>
      </View>
    );
  }
}

AppRegistry.registerComponent('Volunteering', () => Volunteering);
