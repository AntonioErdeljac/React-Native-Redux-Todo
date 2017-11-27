import {createStore, applyMiddleware, combineReducers} from "redux";

const initialState = {
	tasks: [{"text":"hello"}]
};

const taskReducer = (state=initialState, action) => {
	switch(action.type){
		case 'ADD_TASK':
			return {
				...state,
				tasks: ([action.task]).concat(state.tasks || [])
			}
	}
	return state;
}

const store = createStore(taskReducer)

export default store;