import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';



const Navbar = ({ title, buttonAction, buttonColor }) => (
     <NavBar style={styles}>
      <NavTitle style={styles.title}>
        {title}
      </NavTitle>
      <NavButton onPress={buttonAction}>
        <Icon name="md-checkmark" color={buttonColor} size={28}/>
      </NavButton>
  </NavBar>
);

const styles = StyleSheet.create({
    statusBar: {
    backgroundColor: 'rgb(24, 24, 24)',
  },
  navBar: {
    elevation: 3,
    backgroundColor: '#212121',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium'
  },
  buttonText: {
    color: '#e7e7e7',
  },
});

export default Navbar;
