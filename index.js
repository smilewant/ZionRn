/**
 * @format
 */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import App from './js/App';
 
import {name as appName} from './app.json';
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './js/reducer'
import { applyMiddleware, createStore } from 'redux'
import {Provider} from 'react-redux'

AppRegistry.registerComponent(appName, () => index);
const logger = createLogger();
const store = createStore(
	rootReducer,
	applyMiddleware(thunk, logger))

export default class index extends Component {
 render() {
 	return(
 		<Provider store={store}>
    		<App />
  		</Provider>
 		)
  
}
}
