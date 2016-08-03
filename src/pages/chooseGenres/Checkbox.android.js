import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
 } from 'react-native'
 import Icon from 'react-native-vector-icons/Ionicons';

const Checkbox = ({ color, value, changeValue, styles }) => {
  let checkmark;
  if(value)
    checkmark = <Icon name="md-checkmark" color={'white'} size={22}/>;
  return (
    <TouchableOpacity onPress={() => changeValue(!value)}>
      <View style={{ height: 34, width: 34, borderRadius: 34/2, backgroundColor: value? color: 'transparent', justifyContent: 'center', alignItems: 'center', borderColor: color, borderWidth: 2 }}>
        {checkmark}
      </View>
    </TouchableOpacity>
  )
}

Checkbox.propTypes = {}
Checkbox.defaultProps = {}

export default Checkbox
