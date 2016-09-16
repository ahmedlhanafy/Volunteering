import React, {
    Component
} from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableHighlight,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import color from 'color';

import SideBarListItem from './SideBarListItem';

import { Colors } from '../../../Config/Config';
import FakeData from '../../../Config/FakeData';

export default class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            selectedItem: 0,
        }
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.container}>
                        <Text style={styles.title}>Categories</Text>
                        <View>
                            {FakeData.categories.map((props, index) => <SideBarListItem selectActive={() => this.setState({ selectedItem: index }) } active={index === this.state.selectedItem} {...props}/>) }
                            <TouchableHighlight onPress={() => {
                                this.props.closeDrawer()
                                this.props.openCategoriesDialog()
                            } }>
                                <View style={styles.listItemContainer}>
                                    <Icon name="md-add" size={22} color="white"/>
                                    <Text style={styles.listItemText}>Add New Category</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <Text style={styles.title}>Tags</Text>
                        <View>
                            {FakeData.tags.map((props, index) => <SideBarListItem selectActive={() => this.setState({ selectedItem: index + FakeData.categories.length }) } active={index + FakeData.categories.length === this.state.selectedItem} {...props}/>) }
                            <TouchableHighlight onPress={() => {
                                this.props.closeDrawer();                                
                                this.props.openTagsDialog();
                            } }>
                                <View style={styles.listItemContainer}>
                                    <Icon name="md-add" size={22} color="white"/>
                                    <Text style={styles.listItemText}>Add New Tag</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footer}>
                    <Image
                        source={require('../../../../src/imgs/img6.jpg') }
                        style={{ height: 44, width: 44, borderRadius: 44 / 2, borderColor: color(Colors.mainColor).darken(0.2).rgbaString(), borderWidth: 1 }}/>
                    <View style={{ marginLeft: 12, flex: 1 }}>
                        <Text style={{ fontFamily: 'sans-serif-medium', color: 'white', fontSize: 16 }}>Ahmed Magdy Elhanafy</Text>
                        <Text style={{ fontFamily: 'sans-serif-light', color: 'rgba(255,255,255,0.8)' }}><Icon name="md-arrow-up" size={16} />1233</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.openSettings() }>
                        <Icon name="md-settings" size={26} color="rgba(255,255,255,0.2)" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.mainColor,
    },
    title: {
        color: 'rgba(255,255,255,0.5)',
        fontFamily: 'sans-serif-medium',
        fontSize: 16,
        marginLeft: 8,
        marginVertical: 8
    },
    footer: {
        height: 72,
        backgroundColor: color(Colors.mainColor).darken(.14).rgbaString(),
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16
    },
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
});
