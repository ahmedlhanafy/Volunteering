import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav';
import Icon from 'react-native-vector-icons/Ionicons';



const Navbar = ({ activeTab = 0, primaryColor = 'white', changeTab,tabs =[] }) => (
          <View style={styles.continaer}>
           {tabs.map((title, index) => (
             <TouchableNativeFeedback onPress={() => changeTab(index)}>
            <View style={{ borderBottomColor: primaryColor, borderBottomWidth: activeTab === index? 3.2:0, height: 82-24, padding: 12, flex: 1, alignItems: 'center'}}>
              <Icon  name={title} size={28} color={activeTab === index?primaryColor:'grey'}/>
            </View>
          </TouchableNativeFeedback>
           ))}
        </View>
);

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

export default Navbar;
