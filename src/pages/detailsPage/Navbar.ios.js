import React from 'react';
import {
    View,
    StyleSheet,
    SegmentedControlIOS,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Navbar = ({ goBack, primaryColor}) => (
<View style={styles.continaer}>
          <TouchableOpacity onPress={() => goBack()} style={{ position: 'absolute', top: 26, left: 16, zIndex: 9}} >
            <Icon name="ios-arrow-back" color={primaryColor} size={28} style={{ marginRight: 8}} />
          </TouchableOpacity>
          <View  style={{ justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 6 }}>
            <SegmentedControlIOS selectedIndex={0} tintColor={primaryColor} style={{ padding: 8, marginHorizontal: 44, flex: 1 }} values={['Details', 'Description', 'Discussion']}/>
          </View>
        </View>
);

const styles = StyleSheet.create({
    continaer: {
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0,
        zIndex: 2, 
        backgroundColor: 'rgba(27, 27, 27, 0.5)',
        height: 64, 
        paddingTop: 20,
        shadowColor: '#000000',
        shadowRadius: 1,
        shadowOpacity: 0.3,
        shadowOffset: {
        height: 2,
        width: 1
        }
    }
});

export default Navbar;