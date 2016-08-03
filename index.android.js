/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/app.js'

class Volunteering extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('Volunteering', () => Volunteering);
