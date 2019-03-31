import {ipcRenderer} from 'electron';
import {MAIL_GET, MAIL_SET} from '../const/ipcEvents';
import {
    SET_MAIL,
    SET_LOADING,
    SET_ERROR,
    SET_SELECTED_FOLDER,
    SET_SELECTED_EMAIL,
    SET_READ,
    SET_DELETED
} from "../const/actionTypes";

const REQUEST_TIMEOUT = 3000;

export function setLoading(isLoading = false) {
    return {
        type: SET_LOADING,
        data: isLoading,
    }
}

export function setError(hasError = false) {
    return {
        type: SET_ERROR,
        data: hasError,
    }
}

export function setMail(data = {}) {
    return {
        type: SET_MAIL,
        data,
    }
}

export function setSelectedFolder(folder) {
    return {
        type: SET_SELECTED_FOLDER,
        data: folder,
    }
}

export function setSelectedEmail(email) {
    return {
        type: SET_SELECTED_EMAIL,
        data: email,
    }
}

export function setRead(email, isRead) {
    return {
        type: SET_READ,
        data: email,
        isRead
    }
}

export function setDeleted(email) {
    return {
        type: SET_DELETED,
        data: email,
    }
}

export function getEmails() {
    return function(dispatch) {
        let hasSuccess = false;
        dispatch(setLoading(true));
        dispatch(setError(false));

        const onEmailSet = function(e, mail) {
            dispatch(setMail(mail));
            dispatch(setLoading(false));
            hasSuccess = true;
        };

        ipcRenderer.send(MAIL_GET);
        ipcRenderer.once(MAIL_SET, onEmailSet);

        setTimeout(() => {
            if (!hasSuccess) {
                ipcRenderer.removeListener(MAIL_SET, onEmailSet);
                dispatch(setLoading(false));
                dispatch(setError(true));
            }
        }, REQUEST_TIMEOUT);
    }
}

export function deleteEmail(email) {
    return function(dispatch, getState) {
        const {selectedEmail} = getState();
        dispatch(setDeleted(email));
        if (email === selectedEmail) {
            dispatch(setSelectedEmail(null));
        }
    }
}


