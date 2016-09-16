import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity,
    DrawerLayoutAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {default as IconFont} from 'react-native-vector-icons/FontAwesome';

import color from 'color';

import Dialog from '../../Components/Dialog';
import SideBar from './Components/SideBar';
import ListItem from './Components/ListItem';
import TagCircle from '../../Components/TagCircle';

import TagsColors from '../../Config/TagsColors';
import {Icons} from '../../Config/Icons';
import { Colors, Dimensions } from '../../Config/Config';

export default class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            searchText: '',
            categoriesDialog: false,
            type: 'categories'
        }
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref="drawer"
                drawerWidth={320}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => (
                    <SideBar
                        openCategoriesDialog={() => this.setState({ categoriesDialog: true, type: 'categories' }) }
                        openTagsDialog={() => this.setState({ categoriesDialog: true, type: 'tags' }) }
                        closeDrawer={() => this.refs.drawer.closeDrawer() }
                        openSettings={() => this.props.navigator.push({ name: 'SettingsPage' }) }/>
                ) }>
                <View style={styles.container}>
                    <View style={[styles.toolBar, { paddingHorizontal: 0 }]}>
                        <View style={{ flex: 1, backgroundColor: color(Colors.mainColor).lighten(0.4).rgbaString(), margin: 10, borderRadius: 2, position: 'relative', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', elevation: 2 }}>
                            <Icon name="md-menu" color="white" size={24} style={{ marginHorizontal: 16 }} onPress={() => this.refs.drawer.openDrawer() }/>
                            <TextInput
                                onChangeText={text => this.setState({ searchText: text }) } value={this.state.searchText}
                                style={{ fontFamily: 'sans-serif', backgroundColor: 'transparent', fontSize: 18, flex: 1, color: 'lightgrey' }}
                                placeholderTextColor="grey"
                                placeholder="Search"
                                returnKeyType="search"
                                textAlignVertical="center"
                                underlineColorAndroid="transparent" />
                            {this.state.searchText.length > 0 &&
                                <Icon onPress={() => this.setState({ searchText: '' }) } name="md-close" color="white" size={22} style={{ marginRight: 20 }}/>
                            }
                        </View>
                    </View>
                    <ScrollView>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                        <ListItem title="Lorem Test Ipsum" desc={lorem}/>
                    </ScrollView>
                    <TouchableOpacity onPress={() => this.props.navigator.push({ name: 'Login' }) } style={styles.fab}>
                        <Icon name="md-add" size={24} color="white"/>
                    </TouchableOpacity>
                    <Dialog
                        title={this.state.type === 'tags' ? 'Add New Tag' : 'Add New Category'}
                        dismissable={true}
                        actions={[
                            { text: 'CANCEL', color: 'rgba(150,150,150,0.5)', position: 'right', onPress: () => this.setState({ categoriesDialog: false }) },
                            { text: 'ADD', color: Colors.accentColor, position: 'right', onPress: () => alert('On Press pressed') }
                        ]}
                        style={{ backgroundColor: color(Colors.mainColor).lighten(0.2).rgbaString() }}
                        titleColor="white"
                        visible={this.state.categoriesDialog}
                        close={() => this.setState({ categoriesDialog: false }) }>
                        {this.state.type === 'tags' ?
                            this.renderTagsDialog() :
                            this.renderCategoriesDialog()
                        }
                    </Dialog>
                </View>
            </DrawerLayoutAndroid>
        );
    }
    renderCategoriesDialog() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ fontFamily: 'sans-serif-medium', color: 'white', fontSize: 16, paddingHorizontal: 16, height: 56 }}
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    placeholder="Category Name"/>
                <Text style={styles.dialogTitle}>Choose an icon</Text>
                <ScrollView >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {Icons.map(({ icon }) => <IconFont style={{ height: 28, margin: 8, width: 8 * 4 }} name={icon} size={24} color="white"/>) }
                    </View>
                </ScrollView>
            </View>
        )
    }
    renderTagsDialog() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ fontFamily: 'sans-serif-medium', color: 'white', fontSize: 16, paddingHorizontal: 16, height: 56 }}
                    placeholderTextColor="rgba(255,255,255,0.5)"
                    placeholder="Tag Name"/>
                <Text style={styles.dialogTitle}>Choose a color</Text>
                <ScrollView >
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
                        {TagsColors.map(color => <TagCircle style={{ backgroundColor: color, height: 24, width: 24, borderRadius: 24 / 2, margin: 8 }}/>) }
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color(Colors.mainColor).lighten(0.6).rgbaString(),
    },
    toolBar: {
        backgroundColor: color(Colors.mainColor).darken(0.14).rgbaString(),
        height: Dimensions.toolbarSize,
        elevation: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    toolBarTitle: {
        color: 'white',
        fontSize: 20,
        flex: 1,
        fontFamily: 'sans-serif-medium',
        marginLeft: 16
    },
    fab: {
        width: 64,
        height: 64,
        borderRadius: 64 / 2,
        backgroundColor: Colors.accentColor,
        position: 'absolute',
        right: 16,
        bottom: 16,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogTitle: {
        color: 'rgba(255,255,255,0.5)',
        fontFamily: 'sans-serif-regular',
        fontSize: 14,
        marginLeft: 8,
        marginVertical: 4,
    }
});
                 /* <View style={styles.toolBar}>
                    <Icon name="md-menu" color="white" size={24}/>
                    <Text style={styles.toolBarTitle}>Inbox</Text>
                    <Icon name="md-search" color="white" size={26}/>
                </View>
                <View style={[styles.toolBar, { backgroundColor: 'rgba(255,255,255,0.9)' }]}>
                    <Icon name="md-arrow-back" color="rgba(26, 26, 34,0.8)" size={26}/>
                    <TextInput style={{ flex: 1, marginLeft: 16, backgroundColor: 'transparent', fontFamily: 'sans-serif-medium', fontSize: 20 }} placeholder="Search"/>
                </View> */