// <reference path="./.vscode/typings/react/react.d.ts" />
// <reference path="./.vscode/typings/react-native/react-native.d.ts" />
/**
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    StatusBar,
    Platform,
    Navigator,
    BackAndroid,
} from 'react-native';
import color from 'color';

import HomePage from './Pages/HomePage';
import SettingsPage from './Pages/SettingsPage';
import Login from './Pages/Login'
import {Colors} from './Config/Config';

export default class App extends Component {
    constructor() {
        super();
        if (Platform.OS === 'ios') {
            StatusBar.setBarStyle('light-content', true);
            StatusBar.setHidden(false);
        }


    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={color(Colors.mainColor).darken(0.26).rgbaString() }/>
                <Navigator
                    style={{ flex: 1 }}
                    initialRoute={{ name: 'HomePage' }}
                    renderScene={this._navigatorRenderScene}
                    configureScene={_ => Platform.OS === 'android' ? Navigator.SceneConfigs.FloatFromBottomAndroid : Navigator.SceneConfigs.PushFromRight}/>
            </View>
        );
    }
    _navigatorRenderScene(route, navigator) {
        let _navigator = navigator;
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (_navigator.getCurrentRoutes().length === 1) {
                return false;
            }
            _navigator.pop();
            return true;
        });
        switch (route.name) {
            case 'HomePage':
                return (<HomePage navigator={navigator} title="Home"/>);
            case 'SettingsPage':
                return (<SettingsPage navigator={navigator} title="Settings" />);
            case 'Login':
                return <Login navigator={navigator} type="Login"/>
        }
    }
}


