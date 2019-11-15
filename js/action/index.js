

import {
	ADD_TODO,
	SHOW_DIALOG,
	CLEAR_TODO,
	ADD_NOTE,
	CLEAR_NOTE
} from './types'
let nextTodoId = 0;
let nextNoteId = 0;
export const addTodo = text => ({
	type:ADD_TODO,
	id: nextTodoId++,
	text
});

export const clearTodo = () => ({
    type: CLEAR_TODO,
    
});

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
});

export const showDialog = isShow => ({
    type: SHOW_DIALOG,
    isShow
});

export const addNote = note => ({
	type:ADD_NOTE,
	id: nextNoteId++,
	note
});

export const clearNote = () => ({
    type: CLEAR_NOTE,
    
});