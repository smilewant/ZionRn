
import React, { Component } from 'react'
import {
    View,
    TextInput,
    Button,
} from 'react-native'
import { connect } from 'react-redux'
import {addTodo} from '../action'

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.inputValue = '';
    }

    render(){
        let { dispatch } = this.props;
        return (
            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={{flex:1, borderWidth: 1, borderColor: '#cccccc', textAlign: 'center'}}
                    onChangeText={text => this.inputValue = text}
                />
                <Button title="Add Todo" onPress={() => dispatch(
                    // if(typeof inputValue !== '') {addTodo(this.inputValue)}
                    // addTodo(if(inputValue !== '') inputValue else "d")
                    addTodo(this.inputValue)
                    )}/>
            </View>
        )
    }

  

}

function trim(a){
    if(typeof a =='string'){
        return a.replace(/\s+/,'');
    }else {
        return a;
    } 
}

function isEmpty(a){
    var b = trim(a);
    
    if((typeof a) == 'string' && b){
        return 'd';
    }else {
        return 'c';
    } 
}

export default connect()(AddTodo)