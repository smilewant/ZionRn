
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Easing,
    Dimensions,
    Text,
    Animated,
    ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
const {width, height} = Dimensions.get('window');

class LoadingView extends Component {
    static propTypes = {
		isShow: PropTypes.bool,
	};

    render() {
        let{isShow} = this.props
        return isShow? (<View style = {styles.container}>
            <View style = { styles.textContainer}>
                <ActivityIndicator animating = { true } color = { 'red'} size = {'large'}/>
            </View>
        
        </View> ) : null
    }
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: '#00ffffff',
        borderRadius: 8,
        padding: 20,
        maxWidth: width / 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20
    },
    defaultText: {
        color: "#FFF",
        fontSize: 15,
    },
    container: {
        position: "absolute",
        width: width,
        height: height,
        zIndex: 9999,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: 'center',

    }
})

const mapStateToProps = state => ({
    isShow: state.showDialogs
});

// const mapDispatchToProps = dispatch => ({
//     toggleTodo: id => dispatch(toggleTodo(id))
// });

export default connect(
    mapStateToProps,
    // mapDispatchToProps,
)(LoadingView)