import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native';

import color from 'color';

import {Colors} from '../../../Config/Config'

export default class AccountPane extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <View>
                        <Card style={{ padding: 16 }}>
                            <Image source={require('../../../../src/imgs/img6.jpg') } style={{ height: 112, width: 112, borderRadius: 112 / 2, alignSelf: 'center', borderColor: 'rgba(26, 26, 34, 0.5)', borderWidth: 3 }}/>
                            <TextInput style={{ color: 'white', fontSize: 16, fontFamily: 'sans-serif-medium', height: 56 }} underlineColorAndroid={Colors.accentColor} placeholderTextColor="rgba(255,255,255,0.6)" placeholder="Fullname"/>
                            <TextInput style={{ color: 'white', fontSize: 16, fontFamily: 'sans-serif-medium', height: 56 }} underlineColorAndroid={Colors.accentColor}  placeholderTextColor="rgba(255,255,255,0.6)" placeholder="Username"/>
                            <Text style={{ marginTop: 8, fontFamily: 'sans-serif-medium', fontSize: 16, color: 'white' }}>CHANGE PASSWORD</Text>
                            <TouchableOpacity >
                                <View style={{ backgroundColor: Colors.accentColor, borderRadius: 2, elevation: 4, height: 48, alignItems: 'center', justifyContent: 'center', marginTop: 24 }}>
                                    <Text style={{ color: 'white', fontFamily: 'sans-serif-medium', fontSize: 16 }}>SAVE</Text>
                                </View>
                            </TouchableOpacity>
                        </Card>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const Card = ({ children, style }) => (
    <View style={[styles.cardStyle, style]}>{children}</View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardStyle: {
        margin: 8,
        backgroundColor: color(Colors.mainColor).darken(0.06).rgbaString(),
        borderRadius: 4,
        elevation: 4
    }
});