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
  Easing
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
let {
  deviceWidth,
  deviceHeight
} = Dimensions.get('window');
import  {
  BlurView
} from 'react-native-blur';
const color = 'rgba(212, 195, 41, 0.45)';
const color2 = 'rgba(212, 195, 41, 0.7)';


let buttonsAnimationArr = [0,1,2,3,4];
let textAnimationArr = [0,1,2,3,4];


export default class DetailsPage extends Component {
  constructor(){
    super();
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

    return (
      <View style={styles.container}>
        <Image source={require('../../imgs/img2.jpg')} style={{  position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: deviceWidth, height: deviceHeight }}>
          <BlurView blurType="dark"  style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.41)' }}>
            <LinearGradient
              colors={['transparent', color]} style={{ flex: 1,}}>
            </LinearGradient>
          </BlurView>
        </Image>
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0,zIndex: 2, backgroundColor: 'rgba(27, 27, 27, 0.5)',height: 64,   shadowOpacity: .2, paddingTop: 20,
          shadowColor: '#000000',
          shadowRadius: 1,
          shadowOpacity: 0.3,
          shadowOffset: {
            height: 2,
            width: 1
          }}}>
          <TouchableOpacity onPress={() => this.props.navigator.pop()} style={{ position: 'absolute', top: 26, left: 16, zIndex: 9}} >
            <Icon name="ios-arrow-back" color={color2} size={28} style={{ marginRight: 8}} />
          </TouchableOpacity>
          <View  style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
            <SegmentedControlIOS selectedIndex={0} tintColor={color2} style={{ padding: 8, marginHorizontal: 44, flex: 1 }} values={['Details', 'Description', 'Discussion']}/>

          </View>
        </View>
        <View style={{ marginTop: 182, padding: 28 }}>
          <Animated.View style={{ transform: [{ translateX: textAnimation[0]}] }}><Text style={{ color: 'white', fontSize: 18, fontWeight: '400', marginBottom: 1 }}>Resala</Text></Animated.View>
          <Animated.View style={{ transform: [{ translateX: textAnimation[1]}] }}><Text style={{ color: 'white', fontSize: 36, fontWeight: '900', marginBottom: 4}}>Let's conquer the world</Text></Animated.View>
          <Animated.View style={{ transform: [{ translateX: textAnimation[2]}] }}><Text style={{ color: 'white', fontSize: 12, fontWeight: '200', marginBottom: 8 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore </Text></Animated.View>

          <Animated.View style={{ transform: [{ translateX: textAnimation[3]}], flexDirection: 'row',  marginBottom: 2}}>

            <Icon style={{ paddingRight: 9, paddingTop: 1.5 }} name="ios-time-outline" size={17} color="white" />
            <Text style={{ color: 'white', fontSize: 16, fontWeight: '400'}}>July 01-03. 2016</Text>


          </Animated.View>

        <Animated.View style={{ transform: [{ translateX: textAnimation[4]}] }}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center'}}>
              <Icon style={{ paddingRight: 9, paddingTop: 1 }} name="ios-pin-outline" size={20} color="white" />
              <Text style={{ color: 'white', fontSize: 16, fontWeight: '400',}}>City Stars, Madinet Nasr, Cairo</Text>
              <Icon style={{ paddingLeft: 6, marginTop: 3 }} name="ios-arrow-round-forward" size={24} color="white" />
          </TouchableOpacity>
        </Animated.View>



        </View>
        <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, height: 92, alignItems: 'center', flexDirection: 'row', padding: 8 }}>
          <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: this.buttonsAnimatedValues[4] }]}}>
            <TouchableOpacity style={styles.circleButtons}>
              <Icon name="ios-heart-outline" color="white" size={30} />
            </TouchableOpacity>
            <Text style={styles.circleButtonsText}>Like</Text>
          </Animated.View>
          <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: this.buttonsAnimatedValues[3] }]}}>
            <TouchableOpacity style={styles.circleButtons}>
              <Icon name="ios-people-outline" color="white" size={30} />
            </TouchableOpacity>
            <Text style={styles.circleButtonsText}>Go</Text>
          </Animated.View>
          <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: this.buttonsAnimatedValues[2] }]}}>
            <TouchableOpacity style={styles.circleButtons}>
              <Icon name="ios-person-outline" color="white" size={30} />
            </TouchableOpacity>
            <Text style={styles.circleButtonsText}>Maybe</Text>
          </Animated.View>
          <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: this.buttonsAnimatedValues[1] }]}}>
            <TouchableOpacity style={styles.circleButtons}>
              <Icon name="ios-share-outline" color="white" size={30} />
            </TouchableOpacity>
            <Text style={styles.circleButtonsText}>Share</Text>
          </Animated.View>
          <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: this.buttonsAnimatedValues[0] }]}}>
            <TouchableOpacity style={styles.circleButtons}>
              <Icon name="ios-bookmark-outline" color="white" size={30} />
            </TouchableOpacity>
            <Text style={styles.circleButtonsText}>Save</Text>
          </Animated.View>
        </View>
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
  circleButtonsContainers: {
    transform: [{
      translateY: 40
    }],
  },
  circleButtons: {

    paddingTop: 4,
    width: 50,
    height: 50,
    borderRadius: 50/2,
    backgroundColor: color2,
    shadowColor: '#000000',
    shadowRadius: 3,
    shadowOpacity: 0.4,
    shadowOffset: {
      height: 1,
      width: 0.5
    },
    marginBottom: 6,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circleButtonsText: {
    textShadowColor: '#000000',
    textShadowRadius: 1,
    textShadowOffset: {
      height: 1,
      width: 0
    },
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 12
  }
});
