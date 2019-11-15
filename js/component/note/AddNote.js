
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


class AddNote extends Component {
    constructor(props) {
        super(props);

        this.element = {
            name: '',
            date: '',
            content: '',

        };
        this.sendMessages = [];
    }

    render() {
        let { dispatch } = this.props;
        return (
            <View style={{ flexDirection: 'column', flex: 1, backgroundColor: '#ffffff' }}>
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#cccccc', textAlignVertical: 'top', textAlign: 'left', minHeight: 100 }}
                    placeholder={'记录想做的事'}
                    placeholderTextColor={'#BBBBBB'}
                    onChangeText={text => this.element.content = text}
                    multiline

                />
                <TouchableOpacity style={{
                    alignItems: 'center',
                    position: 'absolute', bottom: 80, right: 50,
                }} activeOpacity={0.9} onPress={() => {
                    console.log("this.element.content : " + this.element.content + " - " + this.element.content.length)
                    if(this.element.content == null || this.element.content.length == 0) {
                        alert('并没有记录任何东西')
                        return
                    }
                    console.log("this.element -==================="  )
                    var date = new Date();
                    var time = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
                    this.element.date = time;

                    DeviceStorage.get("note").then(
                        (note) => {
                            if (note != null) {
                                var message = JSON.parse(note)
                                message.push(this.element)
                                DeviceStorage.save("note", message);
                            } else {
                                this.sendMessages.push(this.element)
                                DeviceStorage.save("note", this.sendMessages);
                            }

                        }
                    )
                }}>
                    <Image
                        style={{ width: 40, height: 40, }}
                        source={Img.checked}
                    />
                </TouchableOpacity>

            </View>
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

export default connect()(AddNote)