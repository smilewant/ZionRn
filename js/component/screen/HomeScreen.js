import React, { Component } from 'react'
import {
    View, Button,
} from 'react-native';

import VisibleList from '../VisibleList'
import LoadingView from '../dialog/LoadingView'
import { connect } from 'react-redux'
import { addTodo, showDialog } from '../../action'

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.navigate = this.props.navigation;
    }
    static navigationOptions = {
        header: null,
    }

    _getHotList = () => {
        let { dispatch } = this.props;

        dispatch(showDialog(true));
        fetch("http://m.app.haosou.com/index/getData?type=1&page=1")
            .then((response) => response.json())
            .then((responseJson) => responseJson.list)
            .then((list) => {
                console.log("list.size : " + list.length)
                dispatch(showDialog(false));
                this.navigate.navigate('Details');
                // list.forEach(element => {
                //     dispatch(addTodo(element));

                // });

            }).catch((error) => {
                console.error(error);
            });
    }

    render() {

        this._getHotList();
        return <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#e4e4e4' }}>
            <VisibleList />
            <LoadingView />
            <Button
                onPress={() => this.navigate.navigate('Details')}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    }
}

export default connect()(HomeScreen)