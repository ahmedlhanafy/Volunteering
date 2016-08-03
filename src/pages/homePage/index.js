/**
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  TabBarIOS,
  Text,
  ScrollView,
  Image,
  Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon , {
  TabBarItem
} from 'react-native-vector-icons/Ionicons';

import Navbar from './Navbar';
import Card from './Card';
import FakeData from '../../fakeDocs';
let {
  deviceWidth,
  height
} = Dimensions.get('window');

export default class HomePage extends Component {
  constructor(){
    super();
    if(Platform.OS === 'ios')
    StatusBar.setBarStyle('light-content', true);
  }
  render () {
    return (
      <View style={styles.container}>
        <Navbar title="Feed"/>
        <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="white"
          barTintColor="rgba(11, 11, 11, 1)"
          translucent={true}>
          <TabBarItem
            selected={true}
            iconName="ios-home-outline"
            title=""
            selectedIconName="ios-home"
            >
            <View style={{ flex: 1,backgroundColor: '#2e2e2e'}}>
              <ScrollView style={{ paddingTop: 64-16 }}>
                <View>
                  {FakeData.feedPage.data.map(data => <Card {...data} goDetails={() => this.props.navigator.push({name: 'DetailsPage'})}/>)}
                </View>
              </ScrollView>
            </View>
          </TabBarItem>
          <TabBarItem
            title=""
            iconName="ios-calendar-outline"
            selectedIconName="ios-calendar"
            >
            <View>
              <LinearGradient colors={['#011C27', '#000c11']} style={styles.container}>
                <LinearGradient
                  colors={['#011C27', '#003a53']} style={styles.gradient}>
                  <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', backgroundColor: 'transparent'}}>Feed</Text>
                </LinearGradient>

              </LinearGradient>
            </View>
          </TabBarItem>
        </TabBarIOS>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    paddingHorizontal: 8
  },
});
