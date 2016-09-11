// <reference path="./.vscode/typings/react/react.d.ts" />
// <reference path="./.vscode/typings/react-native/react-native.d.ts" />
/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/app';

class Volunteering extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('Volunteering', () => Volunteering);
