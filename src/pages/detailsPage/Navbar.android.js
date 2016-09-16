import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = ({ goBack, primaryColor, changeTab, activeTab = 0, tabs }) => (
    <View style={styles.continaer}>
        <TouchableOpacity onPress={() => goBack() } style={{ margin: 8, marginHorizontal: 12 }}>
            <Icon name="md-arrow-back" color={primaryColor} size={28} style={{ marginHorizontal: 8 }} />
        </TouchableOpacity>
        <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>
                {tabs.map((title, index) => (
                    <TouchableNativeFeedback onPress={() => changeTab(index) }>
                        <View style={{ borderBottomColor: primaryColor, borderBottomWidth: activeTab === index ? 3.2 : 0, height: 82 - 24, padding: 12 }}>
                            <Text style={{ fontFamily: 'sans-serif-medium', color: activeTab === index ? primaryColor : 'grey', fontSize: 16, marginTop: 5 }}>{title}</Text>
                        </View>
                    </TouchableNativeFeedback>
                )) }
            </View>

        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    continaer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2,
        backgroundColor: 'rgba(27, 27, 27, .6)',
        height: 82,
        shadowColor: '#000000',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 4,
        paddingTop: 24,
    }
});

export default Navbar;