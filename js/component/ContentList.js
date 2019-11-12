import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    RefreshControl,
    FlatList
} from 'react-native'
import ContentItem from './ContentItem'
import { connect } from 'react-redux'
import { addTodo, clearTodo } from '../action'
class ContentList extends Component {
    static propTypes = {
        todos: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.object
            }).isRequired
        ).isRequired,

    };
    constructor(props) {
        super(props);
        this.refreshing = false
        this.num = 0
        // this.zu = [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' },{ text: 'e' },{ text: 'f' },{ text: 'g' },{ text: 'eh' },{ text: 'ei' },{ text: 'j' },{ text: 'k' }];
        this.zu = [{ text: 'a' }];
    }

    _onEndReached = () => {
        console.log(1111111, '--------_onEndReached---------');
        if (this.num > 5) return
        console.log("todos _onEndReached : " + this.num)
        let { dispatch } = this.props;
        this.num++;
        // dispatch(addTodo(this.num));
        // this.zu.push({text: this.num})
        // this.setState({})
    }

    _onRefresh = () => {
        // 不处于 下拉刷新
        let { dispatch } = this.props;
        this.refreshing = false;
        this.num++;
        // dispatch(addTodo(this.num));
        // this.setState({})

        dispatch(clearTodo())
    };

    //data代表的是什么 
    _renderItem = (data) => {
        let dataItem = data.item;
        let{id} = dataItem
        
        return (
            <ContentItem key = {id}
                {...dataItem}
            />
        )
    };

   
    render() {

        let { todos } = this.props;
        // let zu = [{ text: 'a' }, { text: 'b' }, { text: 'c' }, { text: 'd' },{ text: 'e' },{ text: 'f' },{ text: 'g' },{ text: 'eh' },{ text: 'ei' },{ text: 'j' },{ text: 'k' }];
        console.log("todos : render " + todos.length )
        return (
            <FlatList
                data={todos}
                style={{ flex: 0 }}

                // initialNumToRender={zu.length}
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

export default connect()(ContentList)