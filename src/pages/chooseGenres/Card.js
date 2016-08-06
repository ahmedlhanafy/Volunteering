/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CheckBox from './Checkbox';
let {
    deviceWidth,
    height
} = Dimensions.get('window');


export default class Card extends Component {
  constructor(){
    super();
    this.state = {
      checked: false
    }
  }


  render() {
    return (
      <TouchableHighlight onPress={() => this.setState({ checked: !this.state.checked})}>
          <Image resizeMode="cover" style={styles.backgroundImg} source={this.props.img}>
            <LinearGradient
                colors={['transparent', this.props.gradientColor]} style={styles.gradient}>
            </LinearGradient>
            <View style={styles.contentContainer}>
              <View style={{ width: deviceWidth, flex: 1, marginRight: 16}}>
                <Text style={styles.title} >{this.props.title}</Text>
                <Text style={styles.desc} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
              </View>
              <CheckBox
                value={(this.state && this.state.checked ) || false}
                changeValue={checked => this.setState({checked})}
                color="rgba(203, 174, 50, 0.93)"
                />
            </View>
            </Image>
      </TouchableHighlight>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 172,
    backgroundColor: 'black',
    width: deviceWidth
  },
  backgroundImg:{
    height: 172,
    width: deviceWidth,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'space-between',
    padding: 8,
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  title: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
      textShadowColor: 'rgba(36, 36, 36, 0.1)',
      textShadowOffset: {
        width: 0,
        height: 1
      }
  },
  desc: {
    color: 'white',
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 4,
  }
});
