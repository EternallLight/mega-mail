import rootReducer from './reducers'
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';

import {INBOX} from './const/folders';

const initialState = {
    mail: {
        inbox: [],
        sent: [],
        draft: [],
        trash: [],
    },
    isLoading: false, // In reality, we'd rather use these statuses for each folder separately.
    hasError: false, // In reality, we'd rather use these statuses for each folder separately.
    selectedFolder: INBOX,
    selectedEmail: null,
};

const store = createStore(rootReducer, initialState, applyMiddleware(thunkMiddleware));

export default store;
