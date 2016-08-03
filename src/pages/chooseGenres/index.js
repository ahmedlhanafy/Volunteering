/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Platform
} from 'react-native';

import FakeData from '../../fakeDocs';
import Card from './Card';
import Navbar from './Navbar';

export default class ChooseGenresPage extends Component {
  constructor(){
    super();
    if(Platform.OS === 'ios')
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setHidden(false);
  }


  render () {
    return (
      <View style={styles.container}>
        <Navbar title="Choose Genres" buttonAction={() => this.props.navigator.push({ name: 'HomePage'})} buttonColor='rgba(203, 174, 50, 0.93)'/>
        <ScrollView  style={{ paddingTop: Platform.OS === 'ios'? 64:0 }}>
          <View>
            {FakeData.chooseGenresPage.data.map((data) => <Card {...data}/>)}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(51, 51, 51, 0.77)'
  },
});
