

import {
	ADD_TODO
} from '../action/types'

const todos= (state = [], action) => {
	let {id, text, type} = action;
	switch(type) {

		case ADD_TODO:
		let tState = [...state]
		tState.push({
			id:id,
			text:text,
			   completed: false,
		})
		return tState
		// return Object.assign({},...state,{
		// 	id:id,
		// 	text:text,
		// 	   completed: false,
		// })
			// return [
			// 	...state,
			// 	{
			// 		id:id,
			// 		text:text,
   			// 		completed: false,
			// 	}
			// ];
		default : 
			return state;
	}


}

export default todos;