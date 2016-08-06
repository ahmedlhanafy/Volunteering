import React from 'react';
import {
    Text,
    StyleSheet,
    Platform
} from 'react-native';

const TextView = (props,state) => {
    let {
        size = 16,
        color = 'white',
        type = 'primary',
        children
    } = props;

    switch(type){
        case 'primary': break;
        case 'secondary': break;
        case 'header': break;
        case 'toolbarTitle': break;
        case 'primary': break;
        
    }

    return (
        <Text styles={[{
            
        }]} {...props} {...state}>{children}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        
    }
});

export default TextView;