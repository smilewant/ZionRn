import {
	ADD_NOTE, 
} from '../action/types'

const notes = (state = [], action) => {
	let { id, note, type } = action;
	switch (type) {

		case ADD_NOTE:
			let tState = [...state]
			tState.push({
				id: id,
				note: note,
				completed: false,
			})
			return tState
	 
		default:
			return state;
	}


}

export default notes;