/**
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Platform,
  Text,
  Image,
  Dimensions,
  ListView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Navbar from './Navbar';
import Card from './Card';
import FakeData from '../../fakeDocs';
let {
  deviceWidth,
  height
} = Dimensions.get('window');

export default class HomePage extends Component {
  constructor() {
    super();
    if (Platform.OS === 'ios')
      StatusBar.setBarStyle('light-content', true);

    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(FakeData.feedPage.data),
      activeTab: 0,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Navbar
          tabs={['md-paper', 'md-pulse', 'md-calendar', 'md-contact']}
          activeTab={this.state.activeTab}
          changeTab={index => this.setState({ activeTab: index }) }
          />
        <ListView
          pageSize={6}
          initialListSize={7}
          dataSource={this.state.dataSource}
          renderRow={rowData => <Card {...rowData}  goDetails={() => this.props.navigator.push({ name: 'DetailsPage', passProps: { img: rowData.mainImg, gradientColor: rowData.gradientColor } }) }/>}
          />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgrey'
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
