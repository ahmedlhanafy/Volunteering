import React, {
    Component
} from 'react';
import {
    View,
    Text,
    TouchableWithoutFeedback,
    Dimensions,
    StyleSheet,
    TouchableNativeFeedback,
    Animated,
    Easing
} from 'react-native';

let {
    width: deviceWidth
} = Dimensions.get('window');

export default class Dialog extends Component {
    constructor() {
        super();
        this.state = {
            visible: false
        }
        let animationDuration = 400;
        this.animatedVal = new Animated.Value(0);
        this.animationTimingStart = Animated.timing(
            this.animatedVal,
            {
                toValue: 1,
                duration: animationDuration,
                easing: Easing.easing
            }
        );
        this.animationTimingEnd = Animated.timing(
            this.animatedVal,
            {
                toValue: 0,
                duration: animationDuration,
                easing: Easing.easing
            }
        );
    }

    componentWillUpdate(newProps) {
        if (newProps.visible && (this.props && !this.props.visible))
            this.setState({ visible: true }, () => this.animationTimingStart.start());
        else if (!newProps.visible && (this.props && this.props.visible)) {
            this.animationTimingEnd.start(() => this.setState({ visible: false }));
        }
    }
    render() {
        let {
            visible,
            close,
            actions,
            children,
            style,
            title,
            titleColor = "black",
            dismissable = true
        } = this.props;
        let leftActions = actions.filter(({ position }) => position === 'left');
        let rightActions = actions.filter(({ position }) => position === 'right');
        return (
            this.state.visible && <Animated.View style={[styles.wrapper, { opacity: this.animatedVal }]}>
                <TouchableWithoutFeedback onPress={() => dismissable && close() }>
                    <View style={styles.dismissWrapper}/>
                </TouchableWithoutFeedback>
                <Animated.View style={[styles.container, style, { opacity: this.animatedVal }]}>
                    <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
                    <View style={{ flex: 1 }}>
                        {children}
                    </View>
                    <View style={styles.footer}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            {leftActions.map(props => <DialogButton {...props} />) }
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                            {rightActions.map(props => <DialogButton {...props} />) }
                        </View>
                    </View>
                </Animated.View>
            </Animated.View>
        );
    }
}

const DialogButton = ({ text, onPress, color = "green" }) => (
    <TouchableNativeFeedback onPress={() => onPress() }>
        <View style={styles.dialogBtnContainer}>
            <Text style={[styles.dialogBtn, { color }]}>{text}</Text>
        </View>
    </TouchableNativeFeedback>
);

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        elevation: 5,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0
    },
    dismissWrapper: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    },
    container: {
        elevation: 5,
        maxHeight: 420,
        minHeight: 152,
        width: deviceWidth - 8 * 6,
        borderRadius: 2,
        backgroundColor: 'white',
        opacity: 0
    },
    title: {
        fontSize: 20,
        fontFamily: 'sans-serif-medium',
        marginHorizontal: 16,
        marginTop: 16
        // fontWeight: 'bold'
    },
    footer: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 8,
        marginBottom: 8,
        marginHorizontal: 16
    },
    dialogBtnContainer: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8
    },
    dialogBtn: {
        fontFamily: 'sans-serif-medium'
    }
})

