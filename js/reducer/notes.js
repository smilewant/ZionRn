import {
	ADD_NOTE,
	CLEAR_NOTE,
	REFRESH_NOTE,
	DELETE_NOTE,
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
		case CLEAR_NOTE:
			return []
		case REFRESH_NOTE:
			// return state.map(todo => (todo.note.id === note.id) ? { ...todo， note } : todo);
			return state.map(todo => todo);//用于AddNoteScreen ，这里没有遍历为啥就能更新
		case DELETE_NOTE:
			let temp = state.filter(item =>
					item.note.id != note.id)
			return temp
		default:
			return state;
	}


}

export default notes;