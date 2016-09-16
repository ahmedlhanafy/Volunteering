import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import color from 'color';

import TagCircle from '../../../Components/TagCircle';

import { Colors } from '../../../Config/Config';

const tagColors = [{
    title: 'Projects',
    circleColor: '#1abc9c'
},
    {
        title: 'Home',
        circleColor: '#f1c40f'
    },
    {
        title: 'Todo List',
        circleColor: '#e67e22'
    },
    {
        title: 'University',
        circleColor: '#e74c3c'
    }];


const ListItem = ({ title, desc }) => (
    <TouchableOpacity onPress={() => alert('Whaaaaaaa?') }>
        <View style={[styles.container]}>
            <View style={styles.titleDescWrapper}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.desc} numberOfLines={2}>{desc}</Text>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                <Text style={styles.date}>1 minute ago</Text>
                <View style={{ flexDirection: 'row' }}>
                    {tagColors.map(({circleColor}) => <TagCircle style={[{ backgroundColor: circleColor, marginRight: -4 }]}/>) }
                </View>
            </View>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 108,
        padding: 16,
        backgroundColor: color(Colors.mainColor).lighten(0.12).rgbaString(),
        // borderBottomColor: color(Colors.mainColor).lighten(0.4).rgbaString(),
        // borderBottomWidth: 2,
        marginVertical: 1,
        elevation: 3,
    },
    titleDescWrapper: {
        flex: 1,
    },
    title: {
        color: `rgba(255,255,255,0.9)`,
        fontSize: 17,
        // fontWeight: '500',
        fontFamily: 'sans-serif-medium',
        marginBottom: 8,
    },
    desc: {
        color: `rgba(255,255,255,0.5)`,
        fontWeight: '300',
        fontFamily: 'sans-serif',
        fontSize: 15,
    },
    date: {
        color: `rgba(255,255,255,0.5)`,
        fontFamily: 'sans-serif-light',
        fontSize: 13,
        marginBottom: 16,
        // alignSelf: 'flex-end',
    }
});

export default ListItem;