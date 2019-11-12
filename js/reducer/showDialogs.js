
import {
	SHOW_DIALOG
} from '../action/types'

const todos= (state = false, action) => {
	
	switch(action.type) {

		case SHOW_DIALOG:
		
			return action.isShow
		default : 
			return state;
	}


}

export default todos;