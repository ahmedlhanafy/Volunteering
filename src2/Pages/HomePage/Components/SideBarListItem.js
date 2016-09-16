import React from 'react';
import {
    View,
    TouchableHighlight,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

import TagCircle from '../../../Components/TagCircle';

import {Colors} from '../../../Config/Config';

const SideBarListItem = ({ title, icon, circleColor, active, selectActive }) => (
    <TouchableHighlight onPress={() => selectActive() }>
        <View>
            <LinearGradient
                style={[styles.listItemContainer, { borderLeftColor: active ? circleColor ? circleColor : Colors.accentColor : 'transparent', borderLeftWidth: active ? 4 : 0 }]}
                start={[1.0, 1.0]} end={[0.0, 0.0]}
                colors={['transparent', active ? 'rgba(255,255,255,0.18)' : 'transparent']} >
                {icon && <Icon name={`${icon}`} size={22} color="white"/>}
                {circleColor && <TagCircle style={ { backgroundColor: circleColor }}/>}
                <Text style={styles.listItemText}>{title}</Text>
            </LinearGradient>
        </View>
    </TouchableHighlight>

);

const styles = {
    listItemContainer: {
        padding: 14,
        paddingLeft: 16,
        backgroundColor: Colors.mainColor,
        flexDirection: 'row',
        alignItems: 'center'
    },
    listItemText: {
        color: 'white',
        fontFamily: 'sans-serif-medium',
        fontSize: 17,
        marginLeft: 16
    },
}

export default SideBarListItem;