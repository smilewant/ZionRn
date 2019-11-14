import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    RefreshControl,
    FlatList
} from 'react-native'

import { connect } from 'react-redux';
 
 
import NoteItem from './NoteItem';
class NoteList extends Component {
    static propTypes = {
        notes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                note: PropTypes.object
            }).isRequired
        ).isRequired,

    };
    constructor(props) {
        super(props);
        this.refreshing = false

    }

    _onEndReached = () => {

    }

    _onRefresh = () => {
        // 不处于 下拉刷新
        
        this.refreshing = false;

      
    };

    //data代表的是什么 
    _renderItem = (data) => {
        let dataItem = data.item;
        let { id } = dataItem
        return (
            <NoteItem key={id}
                {...dataItem}
            />
        )
    };


    render() {
        let { notes } = this.props;
        return (
            <FlatList
                data={notes}
                style={{ flex: 0 }}
                onEndReached={this._onEndReached}
                refreshControl={
                    <RefreshControl
                        title={'Loading'}
                        colors={['yellow']}
                        refreshing={this.refreshing}
                        onRefresh={() => {
                            this._onRefresh();

                        }}
                    />
                }
                refreshing={this.refreshing}
                keyExtractor={(item) =>
                    item.id.toString()
                }
                renderItem={this._renderItem}
            />
        )
    }
}
const mapStateToProps = state => ({
    notes: state.notes
});
export default connect(mapStateToProps)(NoteList)