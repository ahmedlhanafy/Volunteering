import React from 'react';
import {
    View
} from 'react-native';

import color from 'color';

import { Colors } from '../Config/Config';

const TagCircle = ({ style }) => (
    <View style={[{
        width: 16,
        height: 16,
        borderRadius: 16 / 2,
        borderWidth: 2,
        borderColor: color(Colors.mainColor).darken(0.4).rgbaString()
    }, style]}/>
);

export default TagCircle;