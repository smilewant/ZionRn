import React, { Component } from 'react'
import {
    View, Button,
} from 'react-native';

import LoadingView from '../dialog/LoadingView'
import NoteList from '../note/NoteList'
import { connect } from 'react-redux'
import { addNote, showDialog } from '../../action'
import DeviceStorage from '../../storage/DeviceStorage';

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

        let element = DeviceStorage.get("note");
        console.log("element  1 : " + element )
        element.then( (element) => {       
            console.log("element  2 : " + element )
            // console.log("element  3 : " + JSON.stringify(element ))
            // if((typeof element) == 'object' && element != null)
            dispatch(addNote(JSON.parse(element)))
        });
        // dispatch(addTodo(element));

        dispatch(showDialog(true));
        fetch("http://m.app.haosou.com/index/getData?type=1&page=1")
            .then((response) => response.json())
            .then((responseJson) => responseJson.list)
            .then((list) => {
                console.log("list.size : " + list.length)
                dispatch(showDialog(false));
                // this.navigate.navigate('Details');
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
            <NoteList/>
            <LoadingView />
            <Button
                onPress={() => this.navigate.navigate('AddNote')}
                title="Learn More"
            
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    }
}

export default connect()(HomeScreen)