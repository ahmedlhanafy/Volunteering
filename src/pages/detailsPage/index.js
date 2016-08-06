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
  Dimensions,
  SegmentedControlIOS,
  Animated,
  Image,
  Easing,
  ViewPagerAndroid
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import  {
  BlurView
} from 'react-native-blur';

import Navbar from './Navbar';
import Footer from './detailsPageFooter';

let {
  deviceWidth,
  deviceHeight
} = Dimensions.get('window');


const color = 'rgba(212, 41, 118, 1)';


let buttonsAnimationArr = [0,1,2,3,4];
let textAnimationArr = [0,1,2,3,4];


export default class DetailsPage extends Component {
  constructor(){
    super();

    this.state = {
      activeTab: 0,
    }

    this.buttonsAnimatedValues = [];
    this.textAnimatedValues = [];

    buttonsAnimationArr.forEach((value) => {
      this.buttonsAnimatedValues[value] = new Animated.Value(100);
    });

    textAnimationArr.forEach((value) => {
      this.textAnimatedValues[value] = new Animated.Value(0);
    });

  }
  componentDidMount(){
    this.animateButtons();
    this.animateText();
  }
  animateButtons () {
    let animationArray = [];
    this.buttonsAnimatedValues.forEach((value,index) => {
      let delay = index === 0? 300:0;
      animationArray.push(Animated.timing(
        value,
        {
          toValue: 0,
          duration: 180,
          delay: delay,
          easing: Easing.elastic(1.07)
        }
      ))
    });
    Animated.sequence(animationArray).start();
  }

  animateText(){
    let animationArray = [];
    this.textAnimatedValues.forEach((value,index) => {
      let delay = index === 0? 340:0;
      animationArray.push(Animated.timing(
        value,
        {
          toValue: 1,
          duration: 200,
          delay: delay,
          easing: Easing.elastic(1.06)
        }
      ))
    });
    Animated.sequence(animationArray).start();
  }
  render () {

    let textAnimation = this.textAnimatedValues.map((value) => {
      return value.interpolate({
        inputRange: [0, 1],
        outputRange: [-400, 0]
      });
    });
    let backgroundView;
    if(Platform.OS === 'ios')
    backgroundView = (
      <BlurView blurType="dark"  style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.41)' }}>
      <LinearGradient colors={['transparent', this.props.gradientColor]} style={{ flex: 1,}}/>
      </BlurView>
    )
    else
    backgroundView = (
      <LinearGradient colors={['transparent', this.props.gradientColor]} style={{ flex: 1,}}/>
    )
    return (
      <View style={styles.container}>
      <Navbar
      activeTab={this.state.activeTab}
      changeTab={index => {
        this.setState({ activeTab: index});
        this._viewPager.setPage(index);
      }}
      goBack={() => this.props.navigator.pop()}
      primaryColor={this.props.gradientColor}
      tabs={['Details', 'Description', 'Discussion']}/>
      <Image source={this.props.img || require('../../imgs/img6.jpg')} style={{  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: deviceWidth, height: deviceHeight }}>
      {backgroundView}
      </Image>
      <ViewPagerAndroid ref={ref => this._viewPager = ref} style={{flex: 1}} onPageSelected={e => this.setState({ activeTab: e.nativeEvent.position})}>
      <View style={{flex: 1}}>

      <View style={{ marginTop: 182, padding: 28 }}>
      <Animated.View style={{ transform: [{ translateX: textAnimation[0]}] }}><Text style={{ fontFamily: 'sans-serif',color: 'white', fontSize: 18, fontWeight: '400', marginBottom: 1 }}>Resala</Text></Animated.View>
      <Animated.View style={{ transform: [{ translateX: textAnimation[1]}] }}><Text style={{ fontFamily: 'sans-serif-medium',color: 'white', fontSize: 36, fontWeight: '900', marginBottom: 4}}>Let's conquer the world</Text></Animated.View>
      <Animated.View style={{ transform: [{ translateX: textAnimation[2]}] }}><Text style={{ fontFamily: 'sans-serif',color: 'white', fontSize: 13, fontWeight: '200', marginBottom: 8 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </Text></Animated.View>

      <Animated.View style={{ transform: [{ translateX: textAnimation[3]}], flexDirection: 'row',  marginBottom: 2}}>

      <Icon style={{ paddingRight: 9, paddingTop: 1.5 }} name="md-time" size={17} color="white" />
      <Text style={{ fontFamily: 'sans-serif-light',color: 'white', fontSize: 16, fontWeight: '400'}}>July 01-03. 2016</Text>


      </Animated.View>

      <Animated.View style={{ transform: [{ translateX: textAnimation[4]}] }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
      <Icon style={{ paddingRight: 9, paddingTop: 1 }} name="md-pin" size={20} color="white" />
      <Text style={{ fontFamily: 'sans-serif-light',color: 'white', fontSize: 16, fontWeight: '400',}}>City Stars, Madinet Nasr, Cairo</Text>
      <Icon style={{ paddingLeft: 6, marginTop: 3 }} name="ios-arrow-round-forward" size={24} color="white" />
      </TouchableOpacity>
      </Animated.View>
      </View>
      <Footer animatedValues={this.buttonsAnimatedValues} color={this.props.gradientColor}/>

      </View>
      <View style={{flex: 1}}></View>
      <View style={{flex: 1}}></View>
      </ViewPagerAndroid>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceWidth,
    backgroundColor: 'rgba(51, 51, 51, 0.77)'
  },
});
