
import {createStore} from "redux"

let initialState = {
    title: 'Title',
    count: 0
}

const store = createStore((state =initialState, action ) => {
    switch(action.type) {
        case 'SET_TITLE': {
            let title =  action.word;
            return {...state, title,};
        }
        default: return state;
    }
});

export const setTitle = (word) => ({type: 'SET_TITLE' , word});
window.store = store;

export default store;