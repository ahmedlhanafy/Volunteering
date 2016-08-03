/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Navigator,
  BackAndroid,
} from 'react-native';

import ChooseGenresPage from './pages/chooseGenres';
import HomePage from './pages/homePage';
import DetailsPage from './pages/detailsPage';

export default class App extends Component {
  constructor(){
    super();
    if(Platform.OS === 'ios'){
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setHidden(false);

    }


  }
  render () {
    // configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottomAndroid}

      return (
        <Navigator
        style={{ flex:1 }}
            initialRoute={{ name: 'ChooseGenresPage' }}
            renderScene={this._navigatorRenderScene}/>
      );
  }
  _navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    BackAndroid.addEventListener('hardwareBackPress', () => {
    if (_navigator.getCurrentRoutes().length === 1  ) {
       return false;
    }
    _navigator.pop();
    return true;
    });
    switch (route.name) {
      case 'ChooseGenresPage':
        return (<ChooseGenresPage navigator={navigator} title="Home"/>);
      case 'HomePage':
        return (<HomePage navigator={navigator} title="Details" />);
      case 'DetailsPage':
        return (<DetailsPage navigator={navigator} title="Details" />);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(51, 51, 51, 0.77)'
  }
});
