import React, { Component } from 'react'
import {
    Text,
    StyleSheet,
    Image,
    View,
    TouchableOpacity
} from 'react-native'
import PropTypes from 'prop-types'

export default class NoteItem extends Component {
    static propTypes = {
        id: PropTypes.number,
        note: PropTypes.object,
        navigate: PropTypes.object.isRequired
    };

    render() {
        let { id, note,navigate } = this.props;

        return (
            <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: '#ffffff',
                marginTop: 10,
                marginLeft: 15,
                marginRight: 15,
            }}
                onPress={() =>  navigate.navigate('AddNote', note)}
                activeOpacity={0.9}>
                <View style={{
                    flexDirection: 'column',
                    // alignItems: 'center',
                    backgroundColor: '#ffffff',
                    flex: 1
                }}>
                    <View style={{
                        flexDirection: "row",
                        padding: 10,
                        backgroundColor: '#eeeeee',
                        // display:'flex',
                        // justifyContent:"space-between"    
                    }}>
                        <Text style={{ color: "#333333" }}  >
                            {id}
                        </Text>

                        <Text style={{ color: "#666666", position: "absolute", right: 10, top: 10 }}>

                            {note.date}
                        </Text>
                    </View>
                    <Text style={{ color: "#333333", padding: 10 }}  >
                        {note.content}
                    </Text>

                </View >
            </TouchableOpacity >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },


    itemImages: {
        width: 60,
        height: 60,
        resizeMode: 'stretch'
    },
});