

import {
	ADD_TODO, CLEAR_TODO
} from '../action/types'

const todos = (state = [], action) => {
	let { id, text, type } = action;
	switch (type) {

		case ADD_TODO:
			let tState = [...state]
			tState.push({
				id: id,
				text: text,
				completed: false,
			})
			return tState
		case CLEAR_TODO:
			return [];
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
		default:
			return state;
	}


}

export default todos;