import React, { Component } from 'react';
import {
	View,
	TextInput,
	Text,
	Button,
	FlatList,
} from 'react-native';

import rootReducer from './reducer'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { addTodo, showDialog } from './action'
import VisibleList from './component/VisibleList'
import ContentList from './component/ContentList'
import LoadingView from './component/dialog/LoadingView'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { connect } from 'react-redux'
import AddToDo from './component/AddToDo';

class App extends Component {

	constructor(props) {
		super(props);
		this.value = '';

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
				list.forEach(element => {
					dispatch(addTodo(element));
				
				});

			}).catch((error) => {
				console.error(error);
			});
	}
	//少了flex这个属性，flatlist会显示不全
	render() {
		let { dispatch } = this.props;
		this._getHotList();
		return (
			
			<View style={{ flexDirection: 'column', flex: 1 ,backgroundColor:'#e4e4e4'}}>
				
				{/* <TextInput
					style={{ borderWidth: 1, borderColor: 'blue', textAlign: 'center', paddingVertical: 0 }}
					onChangeText={
						text => this.value = text
					}

				/>
				<Button
					title="Add Todo"
					onPress={() => {

						this._getHotList()

					}
					} /> */}
				<AddToDo/>
				<VisibleList />
				<LoadingView />
			</View>

		)


	}



	//
	// constructor(props){
	//     super(props);
	//     this._startApp();
	//  }

	//  _startApp = () => {
	//      Navigation.startTabBasedApp({
	//          tabs: [
	//              {
	//                  label: 'Home',
	//                  screen: 'ReduxForReactNativeDemo.HomeScreen',

	//                  // selectedIcon: require('./img/checkmark.png'),
	//                  title: 'Home',
	//                  overrideBackPress: false,
	//                  navigatorStyle: {}
	//              },

	//          ]
	//      });
	//  }
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
		return b;
	} else {
		return 'c';
	}
}

export default connect()(App)