import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

let {
  deviceWidth,
  height
} = Dimensions.get('window');


const Card = ({ goDetails, mainImg, ngoTitle, ngoIcon, createdAt, likes, comments, goingCount, liked, commented, going }) => (
  <TouchableHighlight style={styles.card} onPress={() => goDetails()} underlayColor="rgba(255,255,255,0.8)">
  <View>
    <View style={{ flexDirection: 'row' ,  padding: 8, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Image source={ngoIcon} style={styles.ngoLogo}/>
        <Text style={styles.ngoTitle}>{ngoTitle}</Text>
      </View>
      <Text style={styles.date}>{createdAt}</Text>
    </View>
    <Image source={mainImg} style={{ width: deviceWidth, height: 192 }}/>
    <View style={{width: deviceWidth, flex: 1, flexDirection: 'row' ,  padding: 8, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{ width: deviceWidth, flex: 1}}>
        <Text style={styles.eventDesc} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
      </View>
      <View style={{ flexDirection: 'row'}}>
        <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
          <Icon name={liked?'ios-heart':'ios-heart-outline'} color={liked?'#d73434':'#323232'} size={20} /><Text style={styles.iconText}>{likes}</Text>
        </View>
        <View style={{ flexDirection: 'row' , alignItems: 'center', marginHorizontal: 8}}>
          <Icon name={commented?"ios-text":"ios-text-outline"} color="#323232" size={20} /><Text style={styles.iconText}>{comments}</Text>
        </View>
        <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
          <Icon name={going?'ios-people':'ios-people-outline'} color="#323232" size={20} /><Text style={styles.iconText}>{goingCount}</Text>
        </View>
      </View>
    </View>
  
  </View>
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  card: {    
    backgroundColor: '#fff',
    marginVertical: 8, 
    elevation: 2,
    borderRadius: 2.5,
    shadowOpacity: .2,
    shadowColor: '#000000',
    shadowRadius: 1.5,
    shadowOffset: {
      height: 1,
      width: 0
    }
  },
  ngoLogo: {
    width: 28,
    height: 28,
    borderRadius: 28/2,
    marginRight: 8
  },
  ngoTitle: {
    fontWeight: '500',
    color: '#1f1f1f'
  },
  date: {
    fontWeight: '200',
    fontSize: 11,
    color: 'rgba(203, 174, 50, 0.93)'
  },
  iconText: {
    paddingBottom: 3,
    marginLeft: 4,
    fontWeight: '300',
    fontSize: 10,
    color: '#323232'
  },
  icon: {

  },
  eventDesc: {
    fontSize: 12,
    fontWeight: '300',
    marginLeft: 4,
  }
});

export default Card;
