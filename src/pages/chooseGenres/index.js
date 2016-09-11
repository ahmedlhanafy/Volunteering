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
  Platform,
  ListView
} from 'react-native';

import FakeData from '../../fakeDocs';
import Card from './Card';
import Navbar from './Navbar';

export default class ChooseGenresPage extends Component {
  constructor(){
    super();
    if(Platform.OS === 'ios'){
      StatusBar.setBarStyle('light-content', true);
      StatusBar.setHidden(false);
    }
     let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(FakeData.chooseGenresPage.data)
    }

  }

  render () {
    return (
      <View style={styles.container}>
        <Navbar title="Choose Genres" buttonAction={() => this.props.navigator.push({ name: 'HomePage'})} buttonColor='rgba(203, 174, 50, 0.93)'/>
         <ListView
         initialListSize={7}
         removeClippedSubviews={false}
          style={{ paddingTop: Platform.OS === 'ios'? 64:0 }}
          dataSource={this.state.dataSource}
          renderRow={rowData => <Card {...rowData}/>}
        />
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
