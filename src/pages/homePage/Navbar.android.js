import React, {
  Component
} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions,
  Animated,
  Easing
} from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

let {
  width
} = Dimensions.get('window');


export default class Navbar extends Component {
  constructor() {
    super();
    this.animatedValue = new Animated.Value(0);
    this.index = 0;
    // this.animate();
  }

  animateTab(index) {

    this.animatedTiming = Animated.timing(
      this.animatedValue,
      {
        fromValue: 0,
        toValue: 1,
        duration: 180,
        easing: Easing.linear
      }
    );
    this.animatedTiming.start();
  }
  render() {
    let {
      activeTab = 2,
      primaryColor = 'white',
      changeTab,
      tabs = []
    } = this.props;

    let animation = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.index * width / tabs.length, activeTab * width / tabs.length]
    });

    this.index = activeTab;

    return (
      <View colors={['#45e28d', '#8958d0']} style={styles.continaer}>
        {tabs.map((title, index) => (
          <TouchableNativeFeedback onPress={() => {
            changeTab(index);
            this.animateTab(index);
          } }>
            <View style={{ height: 82 - 24, padding: 12, flex: 1, alignItems: 'center' }}>
              <Icon  name={title} size={28} color={activeTab === index ? primaryColor : 'grey'}/>
            </View>
          </TouchableNativeFeedback>
        )) }
        <Animated.View style={{ width: width / tabs.length, height: 3.2, backgroundColor: primaryColor, position: 'absolute', left: 0, transform: [{ translateX: animation }], top: 79, zIndex: 99 }}/>
      </View>

    )
  }
}


const styles = StyleSheet.create({
  continaer: {
    backgroundColor: '#212121',
    height: 82,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    paddingTop: 24,
    justifyContent: 'center'
  }
});
