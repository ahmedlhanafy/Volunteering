import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native';
import { Dimensions } from '../../../Config/Config';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = ({ primaryColor, changeTab, activeTab = 0, tabs, menuClick, goBack }) => (
    <View style={[styles.container, { backgroundColor: primaryColor }]}>
        <View style={styles.toolBar}>
            <TouchableOpacity onPress={() => goBack() }>
                <Icon name="md-arrow-back" color="white" size={28}/>
            </TouchableOpacity>
            <Text style={styles.toolBarTitle}>Settings</Text>
            <Icon onPress={() => menuClick() } name="md-exit" color="white" size={26}/>
        </View>
        <View style={{ flexDirection: 'row', height: 52 }}>
            {tabs.map((title, index) => (
                <TouchableNativeFeedback onPress={() => changeTab(index) }>
                    <View style={{ flex: 1, borderBottomColor: 'white', borderBottomWidth: activeTab === index ? 3.2 : 0, padding: 12, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'sans-serif-medium', color: activeTab === index ? 'white' : 'grey', fontSize: 16 }}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            )) }
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        elevation: 4,
        justifyContent: 'center'
    },
    toolBar: {
        height: Dimensions.toolbarSize-8,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    toolBarTitle: {
        color: 'white',
        fontSize: 22,
        flex: 1,
        fontFamily: 'sans-serif-medium',
        marginLeft: 16
    },
});

export default Navbar;