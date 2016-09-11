import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import {
  BlurView
} from 'react-native-blur';


const Navbar = ({ title, buttonAction, buttonColor }) => (
  <BlurView blurType="dark" style={[styles.navBar]}>
    <View style={{ marginTop: 20, flex: 1, justifyContent: 'space-between', alignItems: 'center', padding: 8, flexDirection: 'row' }}>
      <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
    </View>
  </BlurView>
);

const styles = StyleSheet.create({
  navBar: {
    height: 64,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    shadowOpacity: .2,
    shadowColor: '#000000',
    shadowRadius: 1.5,
    shadowOffset: {
      height: 1,
      width: 0
    }
  }
});

export default Navbar;
