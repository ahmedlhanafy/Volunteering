import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ViewPagerAndroid,
    ScrollView,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    Dimensions,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


import color from 'color';

import AccountPane from './Panes/AccountPane';
import ThemesPane from './Panes/ThemesPane';
import Navbar from './Components/Navbar';

import { Colors } from '../../Config/Config';
import FakeData from '../../Config/FakeData';

const tabs = ['Account', 'Themes', 'Legal'];


export default class SettingsPage extends Component {
    constructor() {
        super();
        this.state = {
            activeTab: 0,
            menuVisible: false
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Navbar goBack={() => this.props.navigator.pop() } activeTab={this.state.activeTab} changeTab={index => {
                    this.refs.viewpager.setPage(index);
                    this.setState({ activeTab: index });
                } } tabs={tabs} menuClick={() => this.setState({ menuVisible: true }) } primaryColor={color(Colors.mainColor).darken(.14).rgbaString() }/>
                <ViewPagerAndroid
                    onPageSelected={e => this.setState({ activeTab: e.nativeEvent.position }) }
                    ref="viewpager"
                    style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <AccountPane/>
                    </View>
                    <View style={{ flex: 1 }}>
                        <ThemesPane/>
                    </View>
                    <View style={{ flex: 1 }}></View>
                </ViewPagerAndroid>
            </View>
        );
    }
}





const CategoriesMenu = ({ visible, close }) => (
    visible && <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'transparent', elevation: 5 }}>
        <TouchableWithoutFeedback onPress={() => close() }>
            <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}/>
        </TouchableWithoutFeedback>
        <View style={menuStyles.container}>
            <ScrollView>
                <View>
                    {FakeData.categories.map(({ title, icon }) => (
                        <TouchableNativeFeedback>
                            <View style={menuStyles.itemContainer}>
                                <Icon name={icon} color="white" size={20}/>
                                <Text style={menuStyles.itemText}>{title}</Text>
                                <Icon name="md-checkmark-circle-outline" color="#31df52" size={20}/>
                            </View>
                        </TouchableNativeFeedback>
                    )) }
                </View>
            </ScrollView>
        </View>
    </View>
);

const TagsMenu = ({ visible, close }) => (
    visible && <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'transparent', elevation: 5 }}>
        <TouchableWithoutFeedback onPress={() => close() }>
            <View style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}/>
        </TouchableWithoutFeedback>
        <View style={menuStyles.container}>
            <ScrollView>
                <View>
                    {FakeData.tags.map(({title, circleColor}) => (
                        <TouchableNativeFeedback>
                            <View style={menuStyles.itemContainer}>
                                <View style={[menuStyles.tagCircle, { backgroundColor: circleColor }]}/>
                                <Text style={menuStyles.itemText}>{title}</Text>
                                <Icon name="md-checkmark-circle-outline" color="#31df52" size={20}/>
                            </View>
                        </TouchableNativeFeedback>
                    )) }
                </View>
            </ScrollView>
        </View>
    </View>
);

const menuStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 8,
        right: 8,
        elevation: 5,
        maxHeight: 380,
        width: 8 * 24,
        backgroundColor: color(Colors.mainColor).lighten(0.2).rgbaString(),
        borderRadius: 2
    },
    itemContainer: {
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemText: {
        flex: 1,
        marginLeft: 12,
        fontSize: 18,
        fontFamily: 'sans-serif-regular',
        color: 'white'
    },
    tagCircle: {
        width: 16,
        height: 16,
        borderRadius: 16 / 2,
        borderWidth: 2,
        borderColor: 'rgb(26, 26, 34)'
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color(Colors.mainColor).lighten(0.3).rgbaString(),
    },
});