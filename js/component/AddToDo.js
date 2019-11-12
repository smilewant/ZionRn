
import React, { Component } from 'react'
import {
    View,
    TextInput,
    Button,
} from 'react-native'
import { connect } from 'react-redux'
import { addTodo } from '../action'

class AddTodo extends Component {
    constructor(props) {
        super(props);

        this.element = {
            name: '',
        };
    }

    render() {
        let { dispatch } = this.props;
        return (
            <View style={{ flexDirection: 'row' }}>
                <TextInput
                    style={{ flex: 1, borderWidth: 1, borderColor: '#cccccc', textAlign: 'center' }}
                    onChangeText={text => this.element.name = text}
                />
                <Button title="Add Todo" onPress={() => dispatch(
                    
                    addTodo(this.element)
                )} />
            </View>
        )
    }



}

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

export default connect()(AddTodo)