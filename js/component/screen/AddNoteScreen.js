
import React, { Component } from 'react'
import {
    View,
    TextInput,
    Button,
    TouchableOpacity,
    Image
} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../../action'
import DeviceStorage from '../../storage/DeviceStorage';
import Img from '../../common/Img';
import { thisExpression } from '@babel/types';
import { addNote, refreshNote, deleteNote } from '../../action'

class AddNoteScreen extends Component {
    constructor(props) {
        super(props);

        // this.element = {
        //     name: '',
        //     date: '',
        //     content: '',

        // };
        this.element = this.props.navigation.state.params;
        this.sendMessages = [];
        if (this.element == null) {
            this.element = {
                name: '',
                date: '',
                content: '',
                id: '',
            }
        }

        let { dispatch } = this.props;
    }

    render() {


        return (
            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#ffffff' }}>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#cccccc', textAlignVertical: 'top', textAlign: 'left', minHeight: 100 }}
                    placeholder={'记录想做的事'}
                    defaultValue={this.element.content}
                    placeholderTextColor={'#BBBBBB'}
                    onChangeText={text => this.element.content = text}
                    multiline

                />
                <TouchableOpacity style={{
                    alignItems: 'center',
                    position: 'absolute', bottom: 80, right: 50,
                }} activeOpacity={0.9} onPress={() => this._keep()}>
                    <Image
                        style={{ width: 40, height: 40, }}
                        source={Img.checked}
                    />
                </TouchableOpacity>


                <TouchableOpacity style={{
                    alignItems: 'center',
                    position: 'absolute', bottom: 80, right: 150,
                }} activeOpacity={0.9} onPress={() => this._delete()}>
                    <Image
                        style={{ width: 40, height: 40, }}
                        source={Img.delete}
                        resizeMode={"contain"}
                    />
                </TouchableOpacity>

            </View>
        )
    }
    componentWillUnmount() {
        console.log("AddNoteScreen---组件卸载");
        //卸载后，返回上页面再进入，显示的值是上次输入的值，
    }

    _delete() {
        let { dispatch } = this.props;
        DeviceStorage.get("note").then(
            (note) => {

                if (note != null) {
                    var message = JSON.parse(note)
                    console.log("this.element.id-=================== " + this.element.id)
                    if (this.element.id == null || this.element.id == '') {
                        alert('没有可删除的记录')
                        return
                    } else {
                        console.log("this.element.id not null=================== ")
                        let temp = message.filter(item =>
                            item.id != this.element.id)

                        DeviceStorage.save("note", temp);
                        dispatch(deleteNote(this.element))
                    }
                }
                this.props.navigation.pop();
            }
        )
    }

    _keep() {
        let { dispatch } = this.props;
        console.log("this.element.content : " + this.element.content + " - " + this.element.content.length)
        if (this.element.content == null || this.element.content.length == 0) {
            alert('并没有记录任何东西')
            return
        }

        var date = new Date();
        var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
        this.element.date = time;
        console.log("date.getTime() -===================" + date.getTime())
        DeviceStorage.get("note").then(
            (note) => {
                console.log("note-===================" + note)
                if (note != null) {
                    var message = JSON.parse(note)
                    console.log("this.element.id-=================== " + this.element.id)
                    if (this.element.id == null || this.element.id == '') {
                        this.element.id = date.getTime()
                        message.push(this.element)
                        DeviceStorage.save("note", message);
                        dispatch(addNote(this.element))
                    } else {
                        console.log("this.element.id not null=================== ")
                        message.forEach(
                            a => {
                                if (a.id == this.element.id) {
                                    a.content = this.element.content
                                }
                            }
                        )
                        DeviceStorage.save("note", message);
                        dispatch(refreshNote(this.element))
                    }
                } else {
                    this.element.id = date.getTime()
                    this.sendMessages.push(this.element)
                    DeviceStorage.save("note", this.sendMessages);
                    dispatch(addNote(this.element))
                }
                this.props.navigation.pop();
            }
        )
    }
}
//react-native-gesture-handler@1.5.0
function trim(a) {
    if (typeof a == 'string') {
        return a.replace(/\s+/, '');
    } else {
        return a;
    }
}

function isEmpty(a) {
    var b = trim(a);

    if ((typeof a) == 'string' && b) {
        return 'd';
    } else {
        return 'c';
    }
}

export default connect()(AddNoteScreen)