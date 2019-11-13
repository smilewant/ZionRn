import React, { Component } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './component/screen/HomeScreen';
import AddToDo from './component/AddToDo';
import { connect } from 'react-redux'
 
const AppNavigator = createStackNavigator(
	{
	  Home: HomeScreen,
	  Details: AddToDo,
	},
	{
	  initialRouteName: 'Home',
	}
  );
 
const App  = createAppContainer(AppNavigator)
  
export default connect()(App)