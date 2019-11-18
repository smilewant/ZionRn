import React, { Component } from 'react'
import {
    View, Button, Image, TouchableOpacity,
} from 'react-native';

import LoadingView from '../dialog/LoadingView'
import NoteList from '../note/NoteList'
import { connect } from 'react-redux'
import { addNote, showDialog, clearNote } from '../../action'
import DeviceStorage from '../../storage/DeviceStorage';
import Img from '../../common/Img';


class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.navigate = this.props.navigation;
        console.log("constructor ")

    }
    static navigationOptions = {
        header: null,
    }

    _getHotList = () => {
        let { dispatch } = this.props;
        
        let element = DeviceStorage.get("note");
        dispatch(clearNote())
        element.then((element) => {
            console.log("element  2 : " + element)
           
            if (element != null) {
                var message = JSON.parse(element)
                message.forEach(
                    a => dispatch(addNote(a))
                )
            }

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
        console.log("HomeScreen render "  )
         

        return <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#e4e4e4' }}>
            <NoteList navigate={this.navigate}/>
            <LoadingView />

            <TouchableOpacity style={{
                alignItems: 'center',

                position: 'absolute', bottom: 80, right: 50,
            }} onPress={() => this.navigate.navigate('AddNote')} activeOpacity={0.9}>
                <Image
                    style={{ width: 50, height: 50, }}
                    // source={require('../../../image/resource_add.png')}
                    source={Img.resource_add}
                />
            </TouchableOpacity>
        </View>
    }

    // 生命周期相关 start 暂时没找到和onResume相似的方法，网上的生命周期好几个都过时了， 如：  componentWillMount()
 

    componentDidMount() {
        console.log("HomeScreen componentDidMount "  )

        this._getHotList();
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate1111---组件需要更新");

        return false;
    }



    componentDidUpdate() {
        console.log("componentDidUpdate---组件更新完毕");
    }
    componentWillUnmount() {
          console.log("HomeScreen componentWillUnmount---组件卸载");
    }
}

export default connect()(HomeScreen)