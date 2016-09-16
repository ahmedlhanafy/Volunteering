import React, {
    Component
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import color from 'color';

import { Colors } from '../../Config/Config';

let {
    width: deviceWidth
} = Dimensions.get('window');

export default class Login extends Component{
    constructor (){
        super();
        this.state = {
            loginForm: true
        }
    }
    
    renderLoginForm(){
        return (
            <View>
                <TextInput style={{ color: 'white', fontSize: 16, fontFamily: 'sans-serif-medium', height: 56 }} underlineColorAndroid={Colors.accentColor} placeholderTextColor="rgba(255,255,255,0.6)" placeholder="Email"/>
                <TextInput style={{ color: 'white', fontSize: 16, fontFamily: 'sans-serif-medium', height: 56 }} underlineColorAndroid={Colors.accentColor} placeholderTextColor="rgba(255,255,255,0.6)" placeholder="Password"/>                
                <TouchableOpacity > 
                    <View style={styles.btn}>
                        <Text style={[styles.btnText, {marginLeft: 0}]}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <Seperator text="OR" color="rgba(255,255,255,0.7)"/>
                <TouchableOpacity > 
                    <View style={[ styles.btn, styles.facebookBtn]}>
                        <Icon name="facebook" size={18} color="white"/>
                        <Text style={styles.btnText}>LOGIN WITH FACEBOOK</Text>
                    </View>
                </TouchableOpacity>
                 <TouchableOpacity > 
                    <View style={[styles.btn, styles.googleBtn]}>
                        <Icon name="google" size={18} color="white"/>                    
                        <Text style={styles.btnText}>LOGIN WITH GOOGLE</Text>
                    </View>
                </TouchableOpacity>    
                <TouchableOpacity onPress={() => this.setState({loginForm: false})}>
                    <Text style={styles.dontHaveAccountLabel} onPress={() => this.setState({loginForm: false})}>DONT'T HAVE AN ACCOUNT?</Text>
                </TouchableOpacity>            
            </View>  
        );  
    }
    renderSignupForm(){
        return(
             <View>
              <TextInput style={{ color: 'white', fontSize: 16, fontFamily: 'sans-serif-medium', height: 56 }} underlineColorAndroid={Colors.accentColor} placeholderTextColor="rgba(255,255,255,0.6)" placeholder="Fullname"/>
                <TextInput style={{ color: 'white', fontSize: 16, fontFamily: 'sans-serif-medium', height: 56 }} underlineColorAndroid={Colors.accentColor} placeholderTextColor="rgba(255,255,255,0.6)" placeholder="Email"/>              
                <TextInput style={{ color: 'white', fontSize: 16, fontFamily: 'sans-serif-medium', height: 56 }} underlineColorAndroid={Colors.accentColor} placeholderTextColor="rgba(255,255,255,0.6)" placeholder="Password"/>                
                <TouchableOpacity > 
                    <View style={[styles.btn, {marginLeft: 0}]}>
                        <Text style={styles.btnText}>SIGNUP</Text>
                    </View>
                </TouchableOpacity>
                <Seperator text="OR" color="rgba(255,255,255,0.7)"/>
                <TouchableOpacity > 
                    <View style={[styles.btn, styles.facebookBtn]}>
                        <Icon name="facebook" size={18} color="white"/>                    
                        <Text style={styles.btnText}>SIGNUP WITH FACEBOOK</Text>
                    </View>
                </TouchableOpacity>
                 <TouchableOpacity > 
                    <View style={[styles.btn, styles.googleBtn]}>
                        <Icon name="google" size={18} color="white"/>                    
                        <Text style={styles.btnText}>SIGNUP WITH GOOGLE</Text>
                    </View>
                </TouchableOpacity>                
                <TouchableOpacity onPress={() => this.setState({loginForm: true})}>                
                    <Text style={styles.dontHaveAccountLabel}>HAVE AN ACCOUNT?</Text>
                </TouchableOpacity>                
           
            </View> 
        );
    }
    render(){
        
        return(
                <View style={styles.container}>
                    <View style={styles.cardStyle}>
                        {this.state.loginForm? this.renderLoginForm():this.renderSignupForm()}
                    </View>
                </View>            
        );
    }
}
const Seperator = ({ text, color: textColor }) => (
     <View style={{marginTop: 16, justifyContent: 'center', alignItems: 'center', flexDirection: 'column', position: 'relative'}}>
        <View style={{  height: 2, width: deviceWidth - 48, backgroundColor: textColor, position: 'absolute', left: 0, top: 8}}/>
        <View style={{backgroundColor: color(Colors.mainColor).darken(0.06).rgbaString(), paddingHorizontal: 36,  justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{color: textColor}}>{text}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color(Colors.mainColor).lighten(0.3).rgbaString(),
        // justifyContent: 'center'
    },
    cardStyle: {
        margin: 8,
        backgroundColor: color(Colors.mainColor).darken(0.06).rgbaString(),
        borderRadius: 4,
        elevation: 4, 
        padding: 16
    },
    googleBtn: {
        backgroundColor: '#d34836',        
    },
    facebookBtn:{
        backgroundColor: '#3B5998',                    
    },
    dontHaveAccountLabel: {
        marginTop: 16,
        fontSize: 15,
        color: 'rgba(255,255,255,.6)',
        fontWeight: 'bold'
    },
    btn: {
        backgroundColor: Colors.accentColor, 
        borderRadius: 2,
         elevation: 4, 
         height: 48, 
         alignItems: 'center', 
         justifyContent: 'center', 
         marginTop: 24, 
        flexDirection: 'row'
    },
    btnText: {
        color: 'white', 
        fontFamily: 'sans-serif-medium', 
        fontSize: 16, 
        marginLeft: 16
    }
});
