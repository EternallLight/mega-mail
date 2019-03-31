import {combineReducers} from "redux";

import {INBOX, TRASH} from "../const/folders";
import {
    SET_MAIL,
    SET_SELECTED_FOLDER,
    SET_SELECTED_EMAIL,
    SET_READ,
    SET_DELETED,
    SET_LOADING,
    SET_ERROR
} from '../const/actionTypes';

function mail(state = {}, action) {
    switch(action.type) {
        case SET_MAIL:
            return action.data;

        case SET_READ:
            const mail = {};
            for (let folder in state) {
                if (state.hasOwnProperty(folder)) {
                    const email = state[folder].find((e) => e._id === action.data._id);
                    if (email) {
                        const i = state[folder].indexOf(email);
                        const updatedEmail = {...email, ...{isRead: action.isRead}};
                        mail[folder] = [...state[folder].slice(0, i), updatedEmail, ...state[folder].slice(i + 1)];
                    } else {
                        mail[folder] = state[folder];
                    }
                } else {
                    mail[folder] = state[folder];
                }
            }
            return mail;

        case SET_DELETED:
            const updatedMail = {};
            for (let folder in state) {
                if (state.hasOwnProperty(folder) && state[folder].includes(action.data)) {
                    updatedMail[folder] = state[folder].filter((e) => e !== action.data);
                } else {
                    updatedMail[folder] = state[folder];
                }
            }
            updatedMail[TRASH].unshift({...action.data, ...{isDeleted: true}});
            return updatedMail;

        default:
            return state;

    }
}

function selectedFolder(state = INBOX, action) {
    switch (action.type) {
        case SET_SELECTED_FOLDER:
            return action.data;
        default:
            return state;
    }
}

function selectedEmail(state = null, action) {
    switch (action.type) {
        case SET_SELECTED_EMAIL:
            return action.data;

        case SET_READ:
            if (state === action.data) {
                return {...action.data, ...{isRead: action.isRead}};
            } else {
                return state;
            }

        default:
            return state;
    }
}

function isLoading(state = false, action) {
    switch (action.type) {
        case SET_LOADING:
            return action.data;
        default:
            return state;
    }
}

function hasError(state = false, action) {
    switch (action.type) {
        case SET_ERROR:
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    mail,
    selectedFolder,
    selectedEmail,
    isLoading,
    hasError,
});
