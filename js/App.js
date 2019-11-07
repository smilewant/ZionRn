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
import { addTodo } from './action'
import VisibleList from './component/VisibleList'
import ContentList from './component/ContentList'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { connect } from 'react-redux'

// const logger = createLogger();
// const store = createStore(
// 	rootReducer,
// 	applyMiddleware(thunk, logger))


// export default class App extends Component {
//     render() {
//         /**
//          * 将store传递给App框架
//          */
//         return (
//             <Provider store={store}>
//                 <Bpp/>
//             </Provider>
//         )
//     }	


// }


class App extends Component {

	constructor(props) {
		super(props);
		this.value = '';

	}

	_getHotList = () => {
		let { dispatch } = this.props;
		fetch("http://m.app.haosou.com/index/getData?type=1&page=1" )
		.then((response) => response.json())
		.then((responseJson) => responseJson.list)
		.then((list) => {
			console.log("list.size : " + list.length)
			list.forEach(element => {
				dispatch(addTodo(element))
			});
			
		})

		
		.catch((error) => {
			console.error(error);
		});
    }
	//少了flex这个属性，flatlist会显示不全
	render() {
		let { dispatch } = this.props;
		return (
			<View style={{ flexDirection: 'column', flex: 1 }}>

				<TextInput
					style={{ borderWidth: 1, borderColor: 'blue', textAlign: 'center', paddingVertical: 0 }}
					onChangeText={
						text => this.value = text
					}

				/>
				<Button
					title="Add Todo"
					onPress={() => {
						// dispatch(addTodo(isEmpty(this.value)))
						this._getHotList()
						// let temp = this.state.sendMessages
						// temp.push( state.text)
						// this.setState({
						// 	sendMessages : temp
						// })
					}
					} />

				<VisibleList />

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