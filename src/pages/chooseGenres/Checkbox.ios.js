import React from 'react';
import BEMCheckBox from 'react-native-bem-check-box';



const CheckBox = ({ color, value, changeValue, styles }) => (
  <BEMCheckBox
    value={value}
    onValueChange={value => changeValue(value)}
    style={[{ width: 35,height: 35 }, styles]}
    tintColor={color}
    onTintColor={color}
    onCheckColor="white"
    onFillColor={color}
    onAnimationType="bounce"
    offAnimationType="bounce"/>
)

export default CheckBox;
