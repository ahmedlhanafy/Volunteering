import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Footer = ({ animatedValues, color }) => (
  <View style={styles.container}>
    <View style={{ flex: 1, maxWidth: 420, flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
      <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: animatedValues[4] }] }}>
        <TouchableOpacity style={[styles.circleButtons, { backgroundColor: color }]}>
          <Icon name="md-heart" color="white" size={26} />
        </TouchableOpacity>
        <Text style={styles.circleButtonsText}>Like</Text>
      </Animated.View>
      <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: animatedValues[3] }] }}>
        <TouchableOpacity style={[styles.circleButtons, { backgroundColor: color }]}>
          <Icon name="md-people" color="white" size={26} />
        </TouchableOpacity>
        <Text style={styles.circleButtonsText}>Go</Text>
      </Animated.View>
      <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: animatedValues[2] }] }}>
        <TouchableOpacity style={[styles.circleButtons, { backgroundColor: color }]}>
          <Icon name="md-person" color="white" size={26} />
        </TouchableOpacity>
        <Text style={styles.circleButtonsText}>Maybe</Text>
      </Animated.View>
      <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: animatedValues[1] }] }}>
        <TouchableOpacity style={[styles.circleButtons, { backgroundColor: color }]}>
          <Icon name="md-share" color="white" size={26} />
        </TouchableOpacity>
        <Text style={styles.circleButtonsText}>Share</Text>
      </Animated.View>
      <Animated.View style={{ alignItems: 'center', flex: 1, transform: [{ translateY: animatedValues[0] }] }}>
        <TouchableOpacity style={[styles.circleButtons, { backgroundColor: color }]}>
          <Icon name="md-bookmark" color="white" size={26} />
        </TouchableOpacity>
        <Text style={styles.circleButtonsText}>Save</Text>
      </Animated.View>

    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 92,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  circleButtonsContainers: {
    transform: [{
      translateY: 40
    }],
  },
  circleButtons: {
    elevation: 6,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
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
    textShadowColor: 'rgba(0, 0, 0, .8)',
    textShadowRadius: 1,
    textShadowOffset: {
      height: 1,
      width: 0
    },
    color: 'white',
    backgroundColor: 'transparent',
    fontSize: 12,
    fontFamily: 'sans-serif'
  }
})

export default Footer;
