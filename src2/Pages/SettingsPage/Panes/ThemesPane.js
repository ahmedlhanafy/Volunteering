import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';

const themes = [
    { primaryColor: '#2c2c2c', accentColor: '#6fff1d' },
    { primaryColor: '#211717', accentColor: '#fe63d7' },
    { primaryColor: '#212b2e', accentColor: '#76dfdc' },
    { primaryColor: '#292620', accentColor: '#f4e66e' },
    { primaryColor: '#2d1d2e', accentColor: '#489ad6' },
    { primaryColor: '#13220e', accentColor: '#f68066' },
    { primaryColor: '#4d4d4d', accentColor: '#1da0ff' },
    { primaryColor: '#0d2d2c', accentColor: '#fff61d' },
    { primaryColor: '#2a1f1c', accentColor: '#e23d8c' },
    { primaryColor: '#d2d2d2', accentColor: '#292929' },
    { primaryColor: '#d9d9d9', accentColor: '#1dff6a' },
    { primaryColor: '#253c28', accentColor: '#c7d242' },
    { primaryColor: '#0f1f2d', accentColor: '#8458ee' },
    { primaryColor: '#2f1515', accentColor: '#6237f2' },
    { primaryColor: '#332026', accentColor: '#1dfff8' },
];

const ThemeBlock = ({ selected, primaryColor, accentColor, onClick }, state) => {
    return (
        <View style={[styles.themeContainer, { backgroundColor: primaryColor }]}  onClick={() => onClick() }>
            <View style={styles.themeHeader}/>
            <View style={{ flex: 1, }}>
                <View style={styles.themeSidebar}/>
                <View style={[styles.themeFAB, { backgroundColor: accentColor, }]}/>
            </View>
        </View>
    );
}

export default class ThemesPane extends Component {
    constructor() {
        super();
        this.state = {
            selectedTheme: 0
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{ padding: 8, flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row' }}>
                    {themes.map((props, index) => <ThemeBlock selected={this.state.selectedTheme === index} {...props} onClick={() => this.setState({ selectedTheme: index }) }/>) }
                </View>
            </ScrollView>


        );
    }
}
const styles = StyleSheet.create({
    themeContainer: {
        margin: 12,
        height: 104,
        width: 104,
        borderRadius: 6,
        elevation: 6,
        overflow: 'hidden'
    },
    themeHeader: {
        height: 30,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth: 1
    },
    themeSidebar: {
        width: 36,
        height: 104,
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        borderRightColor: 'rgba(0,0,0,0.1)',
        borderRightWidth: 1
    },
    themeFAB: {
        height: 32,
        width: 32,
        position: 'absolute',
        bottom: 8,
        right: 8,
        borderRadius: 32 / 2
    }

});
